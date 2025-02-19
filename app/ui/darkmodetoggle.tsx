"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDarkMode } from "@/app/ui/darkmodecontext";

export default function DarkModeToggle() {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<button
			onClick={toggleDarkMode}
			className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
			bg-slate-700 text-slate-100 hover:bg-violet-600
			dark:bg-violet-500 dark:text-slate-100 dark:hover:bg-violet-300 dark:hover:text-slate-800"
		>
			{darkMode ? (
				<SunIcon className="w-5 h-5" />
			) : (
				<MoonIcon className="w-5 h-5" />
			)}
			<p className="hidden md:block">
				{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
			</p>
		</button>
	);
}
