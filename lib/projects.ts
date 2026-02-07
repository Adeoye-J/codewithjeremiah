

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubLink: string;
    primaryColor: string;
}


export const projects : Project[] = [
    {
        id: 1,
        title: "Project One",
        description: "This is a brief description of Project One.",
        techStack: ["React", "Next.js", "Tailwind CSS"],
        image: "hero-bg.jpg",
        githubLink: "https://github.com/example/project-one",
        primaryColor: "#1DA1F2",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        techStack: ["Vue.js", "Nuxt.js", "Sass"],
        image: "hero-bg-1.jpg",
        githubLink: "https://github.com/example/project-two",
        primaryColor: "#42b883",
    }
];