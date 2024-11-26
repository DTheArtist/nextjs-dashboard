import { FireIcon } from "@heroicons/react/24/solid";
import { baloo } from "@/app/ui/fonts";

export default function ChivaLogo() {
	return (
		<div
			className={`${baloo.className} antialiased flex flex-row items-center leading-none text-white font-bold`}
		>
			<FireIcon className="h-12 w-12 rotate-[15deg]" />
			<p className="text-[44px]">Chi'Va</p>
		</div>
	);
}
