"use client"
import { useProjects, useStats } from "@/store";
import { Header } from "./_components/header";
import About from "./_sections/about/about";
import Contact from "./_sections/contact/contact";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";
import { useEffect } from "react";
import getProjects from "@/utils/getProjects";
import LoadingPage from "./loading-page";
import { Footer } from "./_components/footer";
import axios from "axios";

export default function Page() {
    const { isLoading: isProjectsLoading, setProjects } = useProjects(store => store)
    const { isLoading: isStatsLoading, setStats } = useStats(store => store)

    useEffect(() => {
        (async () => {
            const projects = await getProjects()
            setProjects(projects)
            const promises = [
                axios.get("https://api.github.com/users/thegreatagen1"),
                axios.get("https://www.codewars.com/api/v1/users/thegreatagen"),
            ]
            const [{ data: github }, { data: codewars }] = await Promise.all(promises)
            setStats({ github: github.public_repos, codewars: codewars.codeChallenges.totalCompleted })
        })()
    }, [setProjects, setStats])

    return <>
        <LoadingPage loadings={[{ name: "projects", status: isProjectsLoading }, { name: "stats", status: isStatsLoading }]} />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
}
