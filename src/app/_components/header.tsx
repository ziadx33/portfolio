"use client"
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [listOpen, setListOpen] = useState(false)
    const toggleList = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setListOpen(c => !c)
            document.body.style.overflow = "auto"
        }
    }
    return <header className="w-full md:h-[90px] h-[85px] py-[24px] md:px-[90px] px-[24px]  flex items-center justify-between border-b-2">
        <div className="flex gap-[0.7rem]">
            <Logo />
            <ModeToggle />
        </div>
        <nav>
            <Button variant="outline" className="block md:hidden" onClick={toggleList}>
                {listOpen ? <X /> : <Menu />}
            </Button>
            <ul className={`items-center gap-4 font-semibold md:flex transition hidden [&.open]:flex [&.open]:bg-white [&.open]:dark:bg-slate-950 [&.open]:fixed [&.open]:z-50 [&.open]:left-0 [&.open]:top-[85px] [&.open]:w-full [&.open]:h-[calc(100vh-85px)] [&.open]:justify-center [&.open]:flex-col ${listOpen ? "open" : ""}`}>
                <li onClick={toggleList}>
                    <a className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24" href="#about">About me</a>
                </li>
                <li onClick={toggleList}>
                    <a className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24" href="#skills">Skills</a>
                </li>
                <li onClick={toggleList}>
                    <a className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24" href="#projects">Projects</a>
                </li>
                <li onClick={toggleList}>
                    <a className="transition hover:dark:text-slate-200 hover:text-gray-600 dark:hover:text-slate-100 md:w-fit w-full md:h-fit h-24" href="#contact">Contact me</a>
                </li>
            </ul>
        </nav>
    </header>
}
