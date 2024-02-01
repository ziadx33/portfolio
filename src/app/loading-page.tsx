"use client"
import { Vim } from "@/components/logo";
import { Progress } from "@/components/ui/progress";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"

type LoadingPageInterface = { loadings: { name: string; status: boolean }[] };

export default function LoadingPage({ loadings }: LoadingPageInterface) {
    const totalTasks = loadings.length;
    document.body.style.overflow = "hidden"
    window.scrollTo(0, 0)

    const overallProgress =
        totalTasks > 0
            ? (loadings.filter((loading) => loading.status).length / totalTasks) * 100
            : 0;

    const rest = 100 - overallProgress


    useGSAP(async () => {
        gsap.to("body :is(section, header)", {
            y: window.innerHeight - 650,
        })
        if (overallProgress === 100) {
            await new Promise((resolve) => setTimeout(resolve, 700))
            const swipeDuration = 0.8
            gsap.to(".loading-container", {
                borderBottomLeftRadius: (window.innerWidth / 2),
                borderBottomRightRadius: (window.innerWidth / 2),
                y: -window.innerHeight,
                duration: swipeDuration,
                ease: "power1.inOut",
                onComplete() {
                    document.body.style.overflow = "auto"
                    document.querySelector(".loading-container")?.remove()
                }
            })
            gsap.to("body :is(section, header)", {
                y: 0,
                duration: swipeDuration,
                ease: "power1.inOut",
            })
        }
    })

    return (
        <div className="loading-container border-2 w-full h-full fixed bg-white z-50 dark:bg-slate-950 flex flex-col items-center justify-center px-8 md:px-12 lg:px-24 3xl:px-[30rem]">
            <h1 className="md:text-6xl text-3xl font-bold w-fit mx-auto md:mb-12 mb-6 transition md:text-start text-center">welcome to TheGreatagen <Vim width={window.innerWidth > 768 ? 90 : 50} height={90} /></h1>
            <h2 className="md:text-5xl text-2xl font-semibold md:mb-10 mb-6 transition">Loading...</h2>
            <Progress className="w-full md:h-4 h-3 mb-4 transition" value={rest} />
            <p className="transition">Overall Progress: {rest}%</p>
        </div>
    );
}

