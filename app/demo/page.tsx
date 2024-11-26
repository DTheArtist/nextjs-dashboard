/** 
 * DANII: SAVE FOR LATER TO PRATICE DYNAMIC CLIENT COMPONENT USE EFFECTS
 
 import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Page() {
	// State for the theme
	const [theme, setTheme] = useState("system");

	// Sync with system preference
	useEffect(() => {
		if (theme === "system") {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			document.documentElement.classList.toggle("dark", prefersDark);
		} else {
			document.documentElement.classList.toggle("dark", theme === "dark");
		}
	}, [theme]);

	return (
		<div
			className={clsx("min-h-screen transition-colors duration-300", {
				"bg-white text-black": theme === "light",
				"bg-black text-white": theme === "dark",
			})}
		>
			<header className="p-4">
				<h1 className="text-2xl">Check Out Our Demo Options</h1>
				<div className="mt-4">
					<button
						onClick={() => setTheme("light")}
						className="p-2 m-2 bg-gray-200 rounded"
					>
						Light Mode
					</button>
					<button
						onClick={() => setTheme("dark")}
						className="p-2 m-2 bg-gray-800 text-white rounded"
					>
						Dark Mode
					</button>
					<button
						onClick={() => setTheme("system")}
						className="p-2 m-2 bg-blue-500 text-white rounded"
					>
						System Mode
					</button>
				</div>
			</header>
			<main className="p-4">
				<p>Welcome to the page! The theme is now {theme} mode.</p>
				<p>
					<ul>
						<li>Video Demo</li>
						<li>Schedule a Meeding</li>
						<li>Review our Documentation</li>
					</ul>
				</p>
			</main>
		</div>
	);
}
*/
export default function Page() {
	return (
		<main className="text-white">
			<h1>Check out our demo options.</h1>
			<p>
				<ul>
					<li>Video Demo</li>
					<li>Schedule a Meeding</li>
					<li>Review our Documentation</li>
				</ul>
			</p>
		</main>
	);
}
