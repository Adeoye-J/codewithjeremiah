


export interface Action {
    title: string,
    location: string
}

export interface Content {
    title: string,
    description: string
}

export interface Screenshot {
    description: string,
    image: string
}

export interface Project {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    techStack: string[];
    image: string;
    displayImage?: string;
    architecture: string;
    challenges: Content[];
    lessonsLearned: Content[];
    screenshots: Screenshot[];
    links: Action[];
    primaryColor: string;
    type: "frontend" | "backend" | "fullstack";
}
