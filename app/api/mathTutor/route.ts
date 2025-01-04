import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI with the API key
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY, // Securely access the API key
});



export async function POST(req: NextRequest) {
	try {
		console.log("API Key Loaded:", !!process.env.OPENAI_API_KEY);
		const { content } = await req.json();

		if (!content) {
			return NextResponse.json(
				{ error: "User input is required" },
				{ status: 400 },
			);
		}

		console.log("Content received:", content);

		// Create an assistant
		const assistant = await openai.beta.assistants.create({
			name: "Math Tutor",
			instructions:
				"You are a personal math tutor. Write and run code to answer math questions.",
			tools: [{ type: "code_interpreter" }],
			model: "gpt-4o-mini",
		});
		console.log("Assistant ID:", assistant.id);

		// Create a thread with the assistant
		const thread = await openai.beta.threads.messages.create(assistant.id, {
			role: "user",
			content,
		});

		console.log("Thread ID:", thread.id);

		// Stream the response using a ReadableStream
		const readableStream = new ReadableStream({
			start(controller) {
				const run = openai.beta.threads.runs.stream(thread.id, {
					assistant_id: assistant.id,
				});

				run.on("textDelta", (textDelta) => {
					controller.enqueue(textDelta.value); // Stream chunks of data
				});

				run.on("end", () => {
					controller.close();
				});

				run.on("error", (error) => {
					console.error("Error during streaming:", error);
					controller.error(error);
				});
			},
		});

		return new NextResponse(readableStream, {
			headers: { "Content-Type": "text/plain" }, // Set appropriate headers
		});
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
