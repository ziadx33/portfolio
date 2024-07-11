import { technologies } from "@/constants";

type technology = (typeof technologies)[number];

interface Project {
	id: number;
	created_at: string;
	completed_at: string;
	name: string;
	description: string;
	images: string[];
	technologies: technology[];
	code: string;
	url: string;
	status: "pending" | "done";
}

interface Skill {
	id: number;
	name: string;
	image: string;
	description: string;
}
