"use client";

import { useState } from "react";
import axios from "axios";

export default function Page() {
	const [userInput, setUserInput] = useState("");
	const [imageUrl, setImageUrl] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		try {
			// Call the server-side API route with Axios
			const response = await axios.post(
				"/api/huggingFaceImageGen",
				{ userInput }, // Pass user input as the request body
				{ responseType: "blob" }, // Expect binary data as a Blob
			);

			// Create a URL for the Blob to display as an image
			const url = URL.createObjectURL(response.data);
			setImageUrl(url);
		} catch (error) {
			console.error("Error fetching data:", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-6 max-w-lg mx-auto bg-white dark:bg-slate-700 shadow-md rounded-lg">
			<h1 className="text-xl font-bold mb-4">
				Hugging Face Image Assistant
			</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<textarea
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder="Describe what you want the AI to generate..."
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
					{loading ? "Generating..." : "Generate"}
				</button>
			</form>
			{imageUrl && (
				<div className="mt-4 p-4 bg-slate-100 dark:bg-slate-500 rounded-lg">
					<h2 className="text-lg font-medium">Generated Image:</h2>
					<p>
						<a href={imageUrl}>{imageUrl}</a>
					</p>
					<img
						src={imageUrl}
						alt="Generated output"
						className="w-full rounded-lg"
					/>
				</div>
			)}
		</div>
	);
}
