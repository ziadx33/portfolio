"use client"
import { useProjects } from "@/store";
import { Header } from "./_components/header";
import About from "./_sections/about/about";
import Contact from "./_sections/contact/contact";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";
import { useEffect } from "react";
import getProjects from "@/utils/getProjects";
import LoadingPage from "./loading-page";
import { Footer } from "./_components/footer";

export default function Page() {
    const { isLoading: isProjectsLoading, setProjects } = useProjects(store => store)
    useEffect(() => {
        (async () => {
            const projects = await getProjects()
            setProjects(projects)
        })()
    }, [setProjects])
    // <LoadingPage loadings={[{ name: "projects", status: isProjectsLoading }]} />
    return <>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
}
