"use client";

import React, { useState } from "react";

export default function MathTutorPage() {
	const [query, setQuery] = useState("");
	const [response, setResponse] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setResponse("");

		try {
			const res = await fetch("/api/mathTutor", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ content: query }),
			});

			if (!res.ok) {
				throw new Error("Failed to get a response");
			}

			const data = await res.json();
			setResponse(data.response);
		} catch (error) {
			console.error("Error:", error);
			setResponse("Failed to get a response.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="p-6 max-w-lg mx-auto bg-white dark:bg-slate-700 shadow-md rounded-lg">
			<h1 className="text-xl font-bold mb-4">Math Tutor</h1>
			<form onSubmit={handleSubmit}>
				<textarea
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Enter a math problem"
					required
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
					{loading ? "Solving..." : "Submit"}
				</button>
			</form>
			{response && (
				<div>
					<h2>Response:</h2>
					<p>Your Answer Is: {response}</p>
				</div>
			)}
		</div>
	);
}
