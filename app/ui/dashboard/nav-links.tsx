"use client";

import {
	UserGroupIcon,
	HomeIcon,
	DocumentDuplicateIcon,
	AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: "Home", href: "/dashboard", icon: HomeIcon },
	{
		name: "Invoices",
		href: "/dashboard/invoices",
		icon: DocumentDuplicateIcon,
	},
	{ name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
	{ name: "Demo", href: "/dashboard/demo", icon: AdjustmentsVerticalIcon },
];

export default function NavLinks() {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							"flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 hover:bg-indigo-400 hover:text-indigo-100 dark:hover:bg-indigo-300 dark:hover:text-slate-800",
							{
								"dark:bg-chivaPurple-500 dark:text-slate-100 bg-indigo-700 text-indigo-100":
									pathname === link.href,
							},
						)}
					>
						<LinkIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
