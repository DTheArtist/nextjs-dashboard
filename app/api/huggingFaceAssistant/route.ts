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
			"https://api-inference.huggingface.co/models/google/gemma-2-2b-it",
			{ inputs: userInput },
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
					"x-wait-for-model": "true",
				},
			},
		);

		return NextResponse.json(result.data);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{ error: "An error occurred while processing your request." },
			{ status: 500 },
		);
	}
}
