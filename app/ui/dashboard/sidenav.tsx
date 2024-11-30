import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import ChivaLogo from "@/app/ui/chiva-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import DarkModeToggle from "@/app/ui/darkmodetoggle";

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
			<Link
				className="mb-2 flex h-20 items-end justify-start rounded-md bg-chivaPurple-500 p-4 md:h-40"
				href="/"
			>
				<div className="w-32 text-white md:w-40">
					<ChivaLogo />
				</div>
			</Link>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div className="hidden h-auto w-full grow rounded-md bg-slate-200 dark:bg-slate-700 md:block"></div>
				<form>
					<button
						className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3
					bg-slate-200 dark:bg-slate-700 
					hover:bg-indigo-800 hover:text-indigo-100
					dark:hover:bg-indigo-300 dark:hover:text-slate-800"
					>
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</button>
				</form>
				<DarkModeToggle />
			</div>
		</div>
	);
}
