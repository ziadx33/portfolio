import { Code, Github } from "lucide-react";
import Stat from "./components/stat";
import { useStats } from "@/store";

export default function Stats() {
    const { github, codewars } = useStats(store => store)
    return <div className="mt-5 flex gap-2.5">
        {github && codewars && <><Stat name="github" value={github} img={<Github size={40} />} />
            <Stat name="codewars" value={codewars} img={<Code size={40} />} /></>}
    </div>
}
