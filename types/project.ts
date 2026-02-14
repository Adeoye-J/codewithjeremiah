
export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubLink: string;
    primaryColor: string;
    type: "frontend" | "backend" | "fullstack";
}
