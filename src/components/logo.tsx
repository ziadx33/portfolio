"use client"
import { useTheme } from "next-themes"

export default function Logo() {
    const theme = useTheme()
    return <div className="logo flex items-center font-bold gap-[0.250rem]">
        <img src={`/${theme.theme === "dark" ? "dark-" : ""}vim.svg`} alt="logo" draggable="false" />
        TheGreatagen
    </div>
} 
