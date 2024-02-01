"use client"
import { useProjects } from "@/store";
import { Header } from "./_components/header";
import About from "./_sections/about/about";
import Contact from "./_sections/contact/contact";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";
import { useEffect, useState } from "react";
import getProjects from "@/utils/getProjects";
import LoadingPage from "./loading-page";
import { Footer } from "./_components/footer";

export default function Page() {
    const { isLoading: isProjectsLoading, setProjects } = useProjects(store => store)
    const [isWait, setIsWait] = useState(true)
    useEffect(() => {
        (async () => {
            const projects = await getProjects()
            setProjects(projects)
            new Promise((resolve) => setTimeout(resolve, 600)).then(() => setIsWait(false))
        })()
    }, [setProjects, setIsWait])
    // {(isProjectsLoading || isWait) && <LoadingPage loadings={[{ name: "projects", status: isProjectsLoading }]} />}
    return <>
    <LoadingPage loadings={[{ name: "projects", status: isProjectsLoading }]}/>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
}
