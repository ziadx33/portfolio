import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Project } from "@/utils/types";
import { Check, Code, Eye } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Sorts, TechnologiesList } from "../../../projects";

export default function Project({ image, name, description, technologies, url, code, setTechnologiesList, completedInDays, viewAs }: Project & { setTechnologiesList: Dispatch<SetStateAction<TechnologiesList>>, completedInDays: number, viewAs: Sorts["viewAs"] }) {
    const isList = viewAs === "list";
    const heading = <>
        <div className="flex gap-2">
            <h2 className="project-title font-semibold text-xl w-fit">{name} </h2>
            <span className="text-sm flex gap-1 text-gray-500 h-fit my-auto"><Check size={16} className="mt-0.5" /> {completedInDays} in {completedInDays === 1 ? "day" : "days"}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2 dark:text-gray-500">{description}</p>
        <div className="flex gap-1 flex-wrap mb-2.5">
            {technologies.map(technology => {
                return <Button onClick={() => setTechnologiesList(technologiesList => technologiesList.map(tech => { return { ...tech, checked: tech.name === technology } }))} className="h-9 w-fit border-2 rounded-xl dark:hover:bg-transparent" variant="outline" key={technology} title={technology}>
                    <img draggable="false" className="h-full w-fit mr-2" src={`/logos/${technology.split(" ").join("-").toLowerCase()}.png`} />
                    {technology}
                </Button>
            })}
        </div>
    </>
    return <Card className={`${isList ? "w-full flex pb-0" : "w-96"} h-fit overflow-hidden shadow-xl pb-3`}>
        <img src={image} alt={name} draggable='false' className={`${isList ? "w-96 h-full" : "w-full h-44"}`} />
        <div className={`pt-2 px-4 ${isList ? "flex flex-col justify-between" : ""}`}>
            {isList ? <div>{heading}</div> : heading}
            <div className="flex gap-1 mt-auto">
                <Button className="flex-1" asChild>
                    <a href={url} target="_blank">
                        <Eye className="mr-1.5" />
                        View</a>
                </Button>
                <Button className="flex-1" asChild>
                    <a href={code} target="_blank">
                        <Code className="mr-1.5" />
                        Code</a>
                </Button>
            </div>
        </div>
    </Card>
}
