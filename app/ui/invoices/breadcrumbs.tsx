import { clsx } from "clsx";
import Link from "next/link";
import { mulish } from "@/app/ui/fonts";

interface Breadcrumb {
	label: string;
	href: string;
	active?: boolean;
}

export default function Breadcrumbs({
	breadcrumbs,
}: {
	breadcrumbs: Breadcrumb[];
}) {
	return (
		<nav
			aria-label="Breadcrumb"
			className="mb-6 block"
		>
			<ol className={clsx(mulish.className, "flex text-xl md:text-2xl")}>
				{breadcrumbs.map((breadcrumb, index) => (
					<li
						key={breadcrumb.href}
						aria-current={breadcrumb.active}
						className={clsx(
							breadcrumb.active
								? "text-violet-500 font-bold"
								: "text-slate-500",
						)}
					>
						<Link href={breadcrumb.href}>{breadcrumb.label}</Link>
						{index < breadcrumbs.length - 1 ? (
							<span className="mx-3 inline-block">/</span>
						) : null}
					</li>
				))}
			</ol>
		</nav>
	);
}
