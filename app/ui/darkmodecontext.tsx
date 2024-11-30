"use client";

import { createContext, useContext, useState } from "react";

interface DarkModeContextProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
	undefined,
);

export const DarkModeProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setDarkMode((prev) => {
			const newMode = !prev;
			// Apply the "dark" class to <html> globally
			if (newMode) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			return newMode;
		});
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};
