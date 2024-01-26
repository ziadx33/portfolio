import { Vim } from "@/components/logo";
import AboutImage from "./about-image";

export default function About() {
    return <section className="w-full h-[95vh] mt-20" id="about">
        <div className="flex"
        >
            <div className="w-2/4 flex items-start justify-center relative h-[70vh]">
                <div className="img-container w-fit h-fit relative">
                    <img src="/vim.svg" className="absolute w-20 left-10 top-56" draggable="false" />
                    <img src="/logos/next.js.png" className="absolute w-20 left-10 top-20" draggable="false" />
                    <img src="/logos/typescript.png" className="absolute w-20 right-10 top-20" draggable="false" />
                    <img src="/logos/tailwind-css.png" className="absolute w-20 right-10 top-56" draggable="false" />
                    <AboutImage />
                </div>
            </div>
            <div className="w-3/4 h-full">
                <h1 className="text-6xl font-bold mb-6">About me</h1>
                <p className="text-gray-500 w-[80%] dark:text-slate-400">
                    Front-end developer, made over 45 project, worked in 2 companies, 2 years of experience, learning back-end soon, I use Neo<Vim /> as my default editor, which is one of the fastest editors to write code more efficient and fast, I started learning front-end development in 2022, started with just HTML & CSS and I focused on projects because I believe in tutorial hell, so I made a lot of projects in this phase, and I learned react in 3 months and made projects for 3 months, then I moved to next.js because Next.js is a framework and react is just a library, so Next.js provides routing, state managment, and react just provides JSX and you should use a library for routing, and I have a twitter account with over 140 followers, I share there some of new things I learn and my cool new projects, and I&apos;m focusing currently on front-end, and I&apos;m passionate about being a full-stack, and I started a new orginization in Github called TheGreatagen, I make there some js & react libs, and I made a config for Neo<Vim />
                </p>
            </div>
        </div>
    </section>
}
