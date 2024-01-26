import { Header } from "./_components/header";
import About from "./_sections/about/about";
import Hero from "./_sections/hero/hero";
import Projects from "./_sections/projects/projects";

export default function Page() {
    return <>
        <Header />
        <Hero />
        <About />
        <Projects />
    </>
}
