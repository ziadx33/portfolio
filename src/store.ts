import { create } from "zustand"
import { Project, Skill } from "./utils/types"


interface UseProjectsInterface {
    projects: Project[]
    setProjects: (projects: Project[]) => void
    isLoading: boolean
}

const useProjects = create<UseProjectsInterface>((set) => ({
    projects: [],
    setProjects: (projects) => set((state) => ({ ...state, projects, isLoading: false })),
    isLoading: true
}))


interface UseSkillsInterface {
    skills: Skill[]
    setSkills: (skills: Skill[]) => void
    isLoading: boolean
}


export {
    useProjects,
}
