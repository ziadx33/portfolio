import supabase from "@/supabase"
import { Skill } from "./types"


export default async function getSkills(): Promise<Skill[]> {
    const { data, error } = await supabase.from('skills').select('*')
    if (error) throw error.message
    return data
}
