import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		res.status(405).json({ error: "Method not allowed" });
		return;
	}

	try {
		const { content } = req.body;
		if (!content) {
			res.status(400).json({ error: "Content is required" });
			return;
		}

		const assistant = await openai.beta.assistants.create({
			name: "Math Tutor",
			instructions:
				"You are a personal math tutor. Write and run code to answer math questions.",
			tools: [{ type: "code_interpreter" }],
			model: "gpt-4o",
		});

		const thread = await openai.beta.threads.messages.create(assistant.id, {
			role: "user",
			content,
		});

		const run = openai.beta.threads.runs.stream(thread.id, {
			assistant_id: assistant.id,
		});

		let responseText = "";

		run.on("textDelta", (textDelta) => {
			responseText += textDelta.value;
		})
			.on("end", () => {
				res.status(200).json({ response: responseText });
			})
			.on("error", (error) => {
				console.error("Error during streaming:", error);
				res.status(500).json({ error: "Internal server error" });
			});
	} catch (error) {
		console.error("Error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
}
