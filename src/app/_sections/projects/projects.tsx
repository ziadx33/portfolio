"use client"
import { useState } from "react";
import SearchForm from "./components/search-form";
import { technologies } from "@/constants";
import { technology } from "@/utils/types";
import ProjectsList from "./components/projects-list/projects-list";

export interface Sorts {
    sortBy: "older" | "newer" | null
    viewAs: "list" | "gallery"
}

export type TechnologiesList = { checked: boolean, name: technology }[]

export default function Projects() {
    const [technologiesList, setTechnologiesList] = useState<TechnologiesList>(technologies.map(technology => {
        return { checked: false, name: technology }
    }));
    const [searchInputValue, setSearchInputValue] = useState("")
    const [sorts, setSorts] = useState<Sorts>({ sortBy: "newer", viewAs: "gallery" })
    return <section className="w-full h-[95vh]" id="projects">
        <h1 className="text-6xl font-bold w-fit mx-auto mt-24 mb-14">Projects</h1>
        <div className="flex flex-col gap-6 w-[90%] mx-auto">
            <SearchForm technologiesList={technologiesList} setSorts={setSorts} setTechnologiesList={setTechnologiesList} searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} />
            <ProjectsList sorts={sorts} settechnologiesList={setTechnologiesList} technologiesList={technologiesList} searchInputValue={searchInputValue} />
        </div>
    </section>
}
