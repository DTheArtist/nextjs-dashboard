import ChivaLogo from "@/app/ui/chiva-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { baloo } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white">
			<div
				className={
					"flex h-20 shrink-0 items-end rounded-lg bg-chivaPurple-500 p-4 md:h-52"
				}
			>
				<ChivaLogo />
			</div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-slate-200 dark:bg-slate-700 px-6 py-10 md:w-2/5 md:px-20">
					<div className={styles.triangle} />
					<p
						className={`${baloo.className} antialiased text-xl text-gray-800 dark:text-slate-100 md:text-3xl md:leading-normal`}
					>
						<strong>Welcome to Chi'Va.</strong>
						<br />
						Unlock faster access to behavioral health solutions that
						reduce delays, improve patient outcomes, and recover
						lost revenue.{" "}
					</p>
					<Link
						href="https://chivaapp.com"
						className="flex items-center gap-5 self-start rounded-lg bg-chivaPurple-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400 md:text-base"
					>
						<span>Request A Demo</span>{" "}
						<ArrowRightIcon className="w-5 md:w-6" />
					</Link>
					<p>
						Chi'Va offers innovative, neuroscience-driven support
						for anxiety, trauma, and panic relief. Empower your
						organization to provide timely care—without the wait.
					</p>
					<p>
						<a
							href="https://chivaapp.com"
							className="text-chivaPurple-500 dark:text-slate-100 dark:fount-semibold "
						>
							Alpha Testers Try Chi'Va Now. &rarr;.{" "}
						</a>
					</p>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					{/* Add Hero Images Here */}
					<Image
						src="/hero-desktop.png"
						width={1000}
						height={760}
						className="hidden md:block"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
					<Image
						src="/hero-mobile.jpg"
						width={560}
						height={620}
						className="block md:hidden"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
				</div>
			</div>
		</main>
	);
}
