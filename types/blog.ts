
export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    banner: string;
    read_time: string;
    content: {
        introduction: string;
        sections: {
            title: string;
            body: string;
        }[];
        conclusion: string;
    };
}