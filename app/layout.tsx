import "@/app/ui/global.css";
import { mulish } from "@/app/ui/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${mulish.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
/** Danii: use clsx https://github.com/lukeed/clsx to add conditional scheme for light mode and dark mode or system setting*/
