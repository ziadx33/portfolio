import Logo from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Header() {
    return <header className="w-full h-[104px] py-[24px] px-[90px] flex items-center justify-between">
        <div className="flex gap-[0.7rem]">
            <Logo />
            <ModeToggle />
        </div>
        <nav>
            <ul className="flex items-center gap-4 font-semibold">
                <li>
                    <a className="transition hover:text-gray-600 dark:hover:text-slate-100" href="#about">About me</a>
                </li>
                <li>
                    <a className="transition hover:text-gray-600 dark:hover:text-slate-100" href="#skills">Skills</a>
                </li>
                <li>
                    <a className="transition hover:text-gray-600 dark:hover:text-slate-100" href="#projects">Projects</a>
                </li>
                <li>
                    <a className="transition hover:text-gray-600 dark:hover:text-slate-100" href="#contact">Contact me</a>
                </li>
            </ul>
        </nav>
    </header>
}
