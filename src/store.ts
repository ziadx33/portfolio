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

const useSkills = create<UseSkillsInterface>((set) => ({
    skills: [],
    setSkills: (skills) => set((state) => ({ ...state, skills, isLoading: false })),
    isLoading: true
}))

export {
    useProjects,
    useSkills
}
