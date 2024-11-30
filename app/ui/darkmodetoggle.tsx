"use client";

import { useDarkMode } from "@/app/ui/darkmodecontext";

export default function DarkModeToggle() {
	const { toggleDarkMode } = useDarkMode(); // No need for direct darkMode state here

	return (
		<button
			onClick={toggleDarkMode}
			className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
			hover:bg-violet-600 dark:hover:bg-violet-300
			bg-slate-700 text-slate-100 
			dark:bg-slate-200 dark:text-slate-800 "
		>
			{toggleDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
		</button>
	);
}
