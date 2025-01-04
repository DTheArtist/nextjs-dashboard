import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
	try {
		const { userInput } = await req.json();

		if (!userInput) {
			return NextResponse.json(
				{ error: "User input is required" },
				{ status: 400 },
			);
		}

		const apiKey = process.env.HUGGING_FACE_API_KEY;

		const result = await axios.post(
			"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
			{ inputs: userInput }, // Pass user input in the body
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
					"x-wait-for-model": "true",
				},
				responseType: "arraybuffer", // Handle binary data (image blob)
			},
		);

		console.log("User Input:", userInput);
		console.log("API Key:", process.env.HUGGING_FACE_API_KEY);
		console.log("Making request to Hugging Face...");

		// Return the binary response (image blob)
		return new NextResponse(result.data, {
			headers: {
				"Content-Type": "image/png", // Adjust MIME type if necessary
				"Content-Disposition": "inline", // Optional: for browser rendering
			},
		});
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ error: "An error occurred while processing your request." },
			{ status: 500 },
		);
	}
}
