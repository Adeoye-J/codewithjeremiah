
import { Action } from "@/components/general/Hero";

export interface Project {
    id: number;
    title: string;
    description: string;
    detailedDescription?: string;
    techStack: string[];
    image: string;
    displayImage?: string;
    architecture?: string[][];
    challenges?: string[];
    lessonsLearned?: string[][];
    screenshots?: string[][];
    links: Action[];
    primaryColor: string;
    type: "frontend" | "backend" | "fullstack";
}
