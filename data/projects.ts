
import { Project } from "@/types/project";


export const projects : Project[] = [
    {
        id: 1,
        title: "Project One",
        description: "This is a brief description of Project One.",
        detailedDescription: "This is a very detailed description for project one",
        techStack: ["React.js", "Next.js", "Tailwind CSS"],
        image: "hero-bg.jpg",
        links: [{"title": "Github", "location": "https://github.com/example/project-one"}, {"title": "Live", "location": "https://example.com/project-one"}],
        primaryColor: "#1DA1F2",
        type: "frontend",
        architecture: "This is the architecture section of the project",
        challenges: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        lessonsLearned: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        screenshots: [
            {
                "description": "Image Description",
                "image" : "hero-bg.jpg"
            },
            {
                "description": "Image Description",
                "image" : "hero-bg.jpg"
            },
            {
                "description": "Image Description",
                "image" : "hero-bg.jpg"
            },
            {
                "description": "Image Description",
                "image" : "hero-bg.jpg"
            },
        ]
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        detailedDescription: "This is a very detailed description I think.",
        techStack: ["Vue.js", "Nuxt.js", "Sass"],
        image: "hero-bg-1.jpg",
        links: [{"title": "Github", "location": "https://github.com/example/project-two"}, {"title": "Live", "location": "https://example.com/project-two"}],
        primaryColor: "#42b883",
        type: "frontend",
        architecture: "This is the architecture section of the project",
        challenges: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        lessonsLearned: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        screenshots: [
            {
                "description": "Image Description",
                "image" : "hero-bg-1.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        detailedDescription: "This is a very detailed description for project three",
        techStack: ["Angular", "TypeScript", "Bootstrap"],
        image: "hero-bg-2.jpg",
        links: [{"title": "Github", "location": "https://github.com/example/project-three"}, {"title": "Live", "location": "https://example.com/project-three"}],
        primaryColor: "#e52e2e",
        type: "frontend",
        architecture: "This is the architecture section of the project",
        challenges: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        lessonsLearned: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        screenshots: [
            {
                "description": "Image Description",
                "image" : "hero-bg-2.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Project Four",
        description: "This is a brief description of Project Four.",
        detailedDescription: "This is a very detailed description for project four",
        techStack: ["Svelte", "Sapper", "CSS Modules", "Express.js"],
        image: "summary-courses.jpg",
        links: [{"title": "Github", "location": "https://github.com/example/project-four"}, {"title": "Live", "location": "https://example.com/project-four"}],
        primaryColor: "#ff6b6b",
        type: "frontend",
        architecture: "This is the architecture section of the project",
        challenges: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        lessonsLearned: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        screenshots: [
            {
                "description": "Image Description",
                "image" : "summary-courses.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Project Five",
        description: "This is a brief description of Project Five.",
        detailedDescription: "This is a very detailed description for project five",
        techStack: ["Java", "Python", "PHP"],
        image: "summary-projects.jpg",
        links: [{"title": "Github", "location": "https://github.com/example/project-five"}, {"title": "Live", "location": "https://example.com/project-five"}],
        primaryColor: "#f7931e",
        type: "backend",
        architecture: "This is the architecture section of the project",
        challenges: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        lessonsLearned: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        screenshots: [
            {
                "description": "Image Description",
                "image" : "summary-projects.jpg"
            }
        ]

    },
    {
        id: 6,
        title: "Project Six",
        description: "This is a brief description of Project Six.",
        detailedDescription: "This is a very detailed description for project six",
        techStack: ["Ruby on Rails", "Ruby", "Tailwind CSS"],
        image: "summary-resources.jpg",
        links: [{"title": "Github", "location": "https://github.com/example/project-six"}, {"title": "Live", "location": "https://example.com/project-six"}],
        primaryColor: "#e52e2e",
        type: "backend",
        architecture: "This is the architecture section of the project",
        challenges: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        lessonsLearned: [
            {
                "title": "Section Title", 
                "description": "This shows the section description for the above title"
            },
        ],
        screenshots: [
            {
                "description": "Image Description",
                "image" : "summary-resources.jpg"
            }
        ]
    }
];