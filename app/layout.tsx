"use client";
import { DarkModeProvider } from "@/app/ui/darkmodecontext";
import "@/app/ui/global.css";
import { mulish } from "@/app/ui/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<DarkModeProvider>
			<html lang="en" className="dark">
				<body className={`${mulish.className} antialiased`}>
					{children}
				</body>
			</html>
		</DarkModeProvider>
	);
}
/** Danii: use clsx https://github.com/lukeed/clsx to add conditional scheme for light mode and dark mode or system setting*/
