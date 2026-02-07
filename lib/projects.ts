
import { Project } from "@/types/projects";


export const projects : Project[] = [
    {
        id: 1,
        title: "Project One",
        description: "This is a brief description of Project One.",
        techStack: ["React", "Next.js", "Tailwind CSS"],
        image: "hero-bg.jpg",
        githubLink: "https://github.com/example/project-one",
        primaryColor: "#1DA1F2",
        type: "frontend",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        techStack: ["Vue.js", "Nuxt.js", "Sass"],
        image: "hero-bg-1.jpg",
        githubLink: "https://github.com/example/project-two",
        primaryColor: "#42b883",
        type: "frontend",
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        techStack: ["Angular", "TypeScript", "Bootstrap"],
        image: "hero-bg-2.jpg",
        githubLink: "https://github.com/example/project-three",
        primaryColor: "#e52e2e",
        type: "frontend",
    },
    {
        id: 4,
        title: "Project Four",
        description: "This is a brief description of Project Four.",
        techStack: ["Svelte", "Sapper", "CSS Modules"],
        image: "summary-courses.jpg",
        githubLink: "https://github.com/example/project-four",
        primaryColor: "#ff6b6b",
        type: "frontend",
    },
    {
        id: 5,
        title: "Project Five",
        description: "This is a brief description of Project Five.",
        techStack: ["Django", "Python", "Bootstrap"],
        image: "summary-projects.jpg",
        githubLink: "https://github.com/example/project-five",
        primaryColor: "#f7931e",
        type: "backend",
    },
    {
        id: 6,
        title: "Project Six",
        description: "This is a brief description of Project Six.",
        techStack: ["Ruby on Rails", "Ruby", "Tailwind CSS"],
        image: "summary-resources.jpg",
        githubLink: "https://github.com/example/project-six",
        primaryColor: "#e52e2e",
        type: "backend",
    }
];