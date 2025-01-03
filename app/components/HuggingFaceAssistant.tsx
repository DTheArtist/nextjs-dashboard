"use client";

import { useState } from "react";
import axios from "axios";

const HuggingFaceAssistant: React.FC = () => {
	const [userInput, setUserInput] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			const apiKey = process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY; // Add this in your .env.local file

			const result = await axios.post(
				"https://api-inference.huggingface.co/models/google/gemma-2-2b-it",
				{ inputs: userInput }, // Replace userInput with the text you want summarized
				{
					headers: {
						Authorization: `Bearer ${apiKey}`,
						"Content-Type": "application/json",
						"x-wait-for-model": "true",
					},
				},
			);

			// const result = await axios.get(
			// 	"https://api-inference.huggingface.co/models/sshleifer/distilbart-cnn-12-6",
			// 	//"https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta", // Replace with your model URL
			// 	{
			// 		params: { inputs: userInput }, // Use params for query parameters
			// 		headers: {
			// 			Authorization: `Bearer ${apiKey}`, // Add headers if required
			// 		},
			// 	},
			// );
			console.log("API Response:", result.data);

			setResponse(
				result.data?.[0]?.generated_text || "No response generated.",
			);
		} catch (error) {
			console.error("Error fetching response:", error);
			setResponse("An error occurred while processing your request.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-6 max-w-lg mx-auto bg-white dark:bg-slate-700 shadow-md rounded-lg">
			<h1 className="text-xl font-bold mb-4">Hugging Face Assistant</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<textarea
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder="Ask something..."
					className="w-full p-3 border border-slate-300 dark:bg-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
					rows={4}
				/>
				<button
					type="submit"
					className={`w-full px-4 py-2 font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 border-2 border-slate-700 hover:border-slate-100 ${
						loading ? "opacity-50 cursor-not-allowed" : ""
					}`}
					disabled={loading}
				>
					{loading ? "Thinking..." : "Ask"}
				</button>
			</form>
			{response && (
				<div className="mt-4 p-4 bg-slate-100 dark:bg-slate-500 rounded-lg">
					<h2 className="text-lg font-medium">Response:</h2>
					<p>{response}</p>
				</div>
			)}
		</div>
	);
};

export default HuggingFaceAssistant;
