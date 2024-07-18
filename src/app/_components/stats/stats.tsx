"use client";
import { Code } from "lucide-react";
import Stat from "./components/stat";
import { useStats } from "@/store";

export default function Stats() {
	const { setStats: _, isLoading: __, github } = useStats((store) => store);
	return (
		<div className="mt-5 max-lg:w-full justify-center flex gap-2.5">
			{github && (
				<Stat
					key={github}
					name="github"
					value={github}
					img={<Code size={40} />}
				/>
			)}
		</div>
	);
}
