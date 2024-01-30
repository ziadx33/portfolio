import supabase from "@/supabase"
import { Project } from "./types"


export default async function getProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').select('*')
    if (error) throw error.message
    return data
}
