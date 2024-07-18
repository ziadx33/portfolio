import { Button } from "@/components/ui/button";
import { technology } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";
import { TechnologiesList } from "../projects/page";
import Image from "next/image";

type TechnologiesProps = {
	technologies: technology[];
	setTechnologiesList: Dispatch<SetStateAction<TechnologiesList>>;
};

export function Technologies({
	technologies,
	setTechnologiesList,
}: TechnologiesProps) {
	return technologies.map((technology) => {
		return (
			<Button
				onClick={() =>
					setTechnologiesList((technologiesList) =>
						technologiesList.map((tech) => {
							return {
								...tech,
								checked: tech.name === technology,
							};
						}),
					)
				}
				className="h-9 w-fit border-2 rounded-xl dark:hover:bg-transparent"
				variant="outline"
				key={technology}
				title={technology}
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<Image
					width={20}
					height={10}
					draggable="false"
					alt={technology}
					className="h-full w-fit mr-2"
					src={`/logos/${technology
						.split(" ")
						.join("-")
						.toLowerCase()}.${
						technology === "Prisma" ? "webp" : "png"
					}`}
				/>
				{technology}
			</Button>
		);
	});
}
