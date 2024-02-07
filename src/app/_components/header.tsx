"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
    const [listOpen, setListOpen] = useState(false);
    const router = useRouter()
    const toggleList = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setListOpen((c) => !c);
        }
    };
    const goPage = async (page: string) => {
        if (location.pathname !== `/${page}`) {
            const loadingContainer = document.querySelector(".loading-container") as HTMLDivElement;
            const loadingText = loadingContainer?.querySelector(".loading-text") as HTMLHeadingElement
            loadingText.innerHTML = page === "" ? "hero" : page;
            const progressBar = document.querySelector("#loading-progress")?.querySelector("div");
            if (progressBar) progressBar.style.transform = "translateX(100%)";
            const tl = gsap.timeline();
            const swipeDuration = 0.5

            tl.to(loadingContainer, {
                y: 0,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                duration: swipeDuration,
            }).to(null, {
                duration: 0,
                onComplete() {
                    router.push(`/${page}`)
                }
            })

        }
    }
    return (
        <header
            id="hero"
            className="w-full md:h-[90px] h-[85px] py-[24px] md:px-[90px] px-[24px]  flex items-center justify-between border-b-2"
        >
            <div className="flex gap-[0.7rem]">
                <button onClick={() => goPage("")}>
                    <Logo />
                </button>
                <ModeToggle />
            </div>
            <nav>
                <Button
                    variant="outline"
                    className="block md:hidden"
                    onClick={toggleList}
                >
                    {listOpen ? <X /> : <Menu />}
                </Button>
                <ul
                    className={`items-center gap-4 font-semibold md:flex transition hidden [&.open]:flex [&.open]:bg-white [&.open]:dark:bg-slate-950 [&.open]:fixed [&.open]:z-50 [&.open]:left-0 [&.open]:top-[85px] [&.open]:w-full [&.open]:h-[calc(100vh-85px)] [&.open]:justify-center [&.open]:flex-col ${listOpen ? "open" : ""}`}
                >
                    <li onClick={toggleList}>
                        <button
                            className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24"
                            onClick={() => goPage("about")}
                        >
                            About me
                        </button>
                    </li>
                    <li onClick={toggleList}>
                        <button
                            onClick={() => goPage("projects")}
                            className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24"
                        >
                            Projects
                        </button>
                    </li>
                    <li onClick={toggleList}>
                        <button
                            className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24"
                            onClick={() => goPage("contact")}
                        >
                            Contact me
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
