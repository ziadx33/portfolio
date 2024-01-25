import SocialLinks from "@/components/social-links";
import Image from "next/image";

export default function Hero() {
    return <section className="w-full h-[80vh] flex items-center" id="hero">
        <div className="container h-[80vh] mx-auto flex items-start mt-28 gap-12">
            <div className="text flex flex-col h-[50%] mt-12 w-2/3">
                <h1 className="title leading-tight text-6xl mb-6 dark:text-gray-200">
                    Hi, I&apos;m <span className="font-bold">TheGreatagen.</span>
                    <br />
                    <span className="font-bold">Frontend</span> Developer,
                    <br />
                    based in <span className="font-bold">Egypt</span>.
                </h1>
                <p className="w-[80%] text-gray-500 mb-10 dark:text-slate-400">Hi, my name is TheGreatagen, I&apos;m a frontend developer, I build web applications, I love to learn new technologies, I wanna be a Full Stack web developer, I have been as a front-end for 2 years, worked in 2 companies, and I love to share my knowledge.</p>
                <SocialLinks />
            </div>
            <div className="img-container w-1/2 h-[50%] mt-12 flex justify-center items-start">
                <Image draggable="false" width={500} height={500} src="/vim.svg" alt="vim" />
            </div>
        </div>
    </section>
}
