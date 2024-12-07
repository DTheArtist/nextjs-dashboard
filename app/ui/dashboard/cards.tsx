import {
	BanknotesIcon,
	ClockIcon,
	UserGroupIcon,
	InboxIcon,
} from "@heroicons/react/24/outline";
import { mulish } from "@/app/ui/fonts";

const iconMap = {
	collected: BanknotesIcon,
	customers: UserGroupIcon,
	pending: ClockIcon,
	invoices: InboxIcon,
};

export default async function CardWrapper() {
	return (
		<>
			{/* NOTE: Uncomment this code in Chapter 9 */}

			<Card
				title="Collected"
				value={totalPaidInvoices}
				type="collected"
			/>
			<Card
				title="Pending"
				value={totalPendingInvoices}
				type="pending"
			/>
			<Card
				title="Total Invoices"
				value={numberOfInvoices}
				type="invoices"
			/>
			<Card
				title="Total Customers"
				value={numberOfCustomers}
				type="customers"
			/>
		</>
	);
}

export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: "invoices" | "customers" | "pending" | "collected";
}) {
	const Icon = iconMap[type];

	return (
		<div className="rounded-xl bg-slate-200 dark:bg-slate-700 p-2 shadow-sm">
			<div className="flex p-4">
				{Icon ? (
					<Icon className="h-5 w-5 text-slate-700 dark:text-white" />
				) : null}
				<h3 className="ml-2 text-sm font-medium">{title}</h3>
			</div>
			<p
				className={`${mulish.className}
          truncate rounded-xl bg-white dark:bg-slate-600 px-4 py-8 text-center text-2xl`}
			>
				{value}
			</p>
		</div>
	);
}
