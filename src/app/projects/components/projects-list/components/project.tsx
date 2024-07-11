/* eslint-disable @next/next/no-img-element */
import Slider from "@/app/_components/slider/slider";
import { Technologies } from "@/app/_components/technologies";
import { Sorts, TechnologiesList } from "@/app/projects/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Project as ProjectType, technology } from "@/utils/types";
import { Check, Code, Eye, LoaderIcon, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type ProjectProps = ProjectType & {
	setTechnologiesList: Dispatch<SetStateAction<TechnologiesList>>;
	completedInDays: number;
	viewAs: Sorts["viewAs"];
};

export default function Project(data: ProjectProps) {
	const isList = data.viewAs === "list";
	const heading = (
		<>
			<div className="flex gap-2">
				<h2 className="project-title font-semibold text-xl w-fit">
					{data.name}{" "}
				</h2>
				<span className="text-sm flex gap-1 text-gray-500 h-fit my-auto">
					{data.status === "done" ? (
						<>
							<Check size={16} className="mt-0.5" />{" "}
							{data.completedInDays} in{" "}
							{data.completedInDays === 1 ? "day" : "days"}
						</>
					) : (
						<>
							<LoaderIcon size={16} className="mt-0.5" />{" "}
							pending
						</>
					)}
				</span>
			</div>
			<p className="text-gray-600 text-sm mb-2 line-clamp-5 dark:text-gray-500">
				{data.description}
			</p>
			<div className="flex gap-1 flex-wrap mb-2.5">
				<Technologies
					setTechnologiesList={data.setTechnologiesList}
					technologies={data.technologies.slice(0, 2)}
				/>
				{data.technologies.length > 2 && (
					<DialogTrigger asChild>
						<Button
							size="icon"
							className="h-6 mt-auto mb-0.5"
							variant="outline"
						>
							<MoreHorizontal size={15} />
						</Button>
					</DialogTrigger>
				)}
			</div>
		</>
	);
	return (
		<Card
			className={`${
				isList ? "w-full flex pb-0" : "w-[22.5rem] "
			} h-fit overflow-hidden shadow-xl relative`}
		>
			<Image
				width={1920}
				height={1080}
				src={data.images[0]}
				alt={data.name}
				draggable="false"
				className={cn(
					"object-cover",
					isList ? "w-96 border-r" : "w-full h-44",
				)}
			/>
			<Dialog>
				<div
					className={`pt-2 px-4 pb-2 ${
						isList ? "flex flex-col justify-between" : ""
					}`}
				>
					{isList ? <div>{heading}</div> : heading}

					<div className="flex gap-1 mt-auto mb-2">
						<Button
							variant="outline"
							className="flex-1"
							asChild
						>
							<a href={data.url} target="_blank">
								<Eye className="mr-1.5" />
								Preview
							</a>
						</Button>
						<Button
							variant="outline"
							className="flex-1"
							asChild
						>
							<a href={data.code} target="_blank">
								<Code className="mr-1.5" />
								Code
							</a>
						</Button>
					</div>
					<Button className="w-full pb-3" asChild>
						<DialogTrigger>Show More</DialogTrigger>
					</Button>
				</div>
				<ProjectDialogContent
					technologies={data.technologies}
					setTechnologiesList={data.setTechnologiesList}
					data={data}
				/>
			</Dialog>
		</Card>
	);
}

type ProjectDialogContent = {
	data: ProjectProps;
	technologies: technology[];
	setTechnologiesList: Dispatch<SetStateAction<TechnologiesList>>;
};

function ProjectDialogContent({
	data,
	technologies,
	setTechnologiesList,
}: ProjectDialogContent) {
	return (
		<DialogContent className="flex w-[90%] md:w-full  max-w-[38rem] h-fit max-h-[50rem]  overflow-auto">
			<div className="flex-1 h-fit mt-6 flex flex-col gap-2">
				<Slider
					className="w-full h-80 border outline-muted rounded-lg"
					images={data.images}
				/>
				<div className="flex gap-2">
					<h2 className="project-title font-semibold text-3xl w-fit">
						{data.name}{" "}
					</h2>
					<span className="text-md items-center flex gap-1 text-gray-500 h-fit mt-2.5">
						{data.status === "done" ? (
							<>
								<Check size={16} className="mt-0.5" />{" "}
								{data.completedInDays} in{" "}
								{data.completedInDays === 1
									? "day"
									: "days"}
							</>
						) : (
							<>
								<LoaderIcon
									size={16}
									className="mt-0.5"
								/>{" "}
								pending
							</>
						)}
					</span>
				</div>
				<p className="text-gray-600 text-md dark:text-gray-500">
					{data.description}
				</p>
				<DialogClose className="flex gap-1 flex-wrap mb-2.5">
					<Technologies
						setTechnologiesList={setTechnologiesList}
						technologies={technologies}
					/>
				</DialogClose>
				<div className="flex flex-col gap-2 mt-auto mb-2">
					<Button className="flex-1" asChild>
						<a href={data.url} target="_blank">
							<Eye className="mr-1.5" />
							Preview
						</a>
					</Button>
					<Button className="flex-1" asChild>
						<a href={data.code} target="_blank">
							<Code className="mr-1.5" />
							Code
						</a>
					</Button>
				</div>
			</div>
		</DialogContent>
	);
}
