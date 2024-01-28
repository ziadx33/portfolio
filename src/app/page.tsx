"use client"
import { useProjects, useSkills } from "@/store";
import { Header } from "./_components/header";
import About from "./_sections/about/about";
import Contact from "./_sections/contact/contact";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";
import { useEffect, useState } from "react";
import getProjects from "@/utils/getProjects";
import LoadingPage from "./loading-page";
import getSkills from "@/utils/getSkills";

export default function Page() {
    const { isLoading: isProjectsLoading, setProjects } = useProjects(store => store)
    const { isLoading: isSkillsLoading, setSkills } = useSkills(store => store)
    const [isWait, setIsWait] = useState(true)
    useEffect(() => {
        (async () => {
            const projects = await getProjects()
            setProjects(projects)
            const skills = await getSkills()
            setSkills(skills)
            new Promise((resolve) => setTimeout(resolve, 600)).then(() => setIsWait(false))
        })()
    }, [setProjects, setSkills, setIsWait])
    return <>
        {(isProjectsLoading || isSkillsLoading || isWait) && <LoadingPage loadings={[{ name: "projects", status: isProjectsLoading }, { name: "skills", status: isSkillsLoading }]} />}
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </>
}
