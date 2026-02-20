import { Blog } from "@/types/blog";

export const blogs : Blog[] = [
    {
        id: 1,
        title: "Understanding React Hooks",
        excerpt: "A deep dive into React Hooks and how they can simplify your code.",
        date: "2024-05-01",
        author: "Jeremiah Bankole",
        category: "React",
        tags: ["React", "Hooks", "JavaScript"],
        banner: "react-hooks.png",
        read_time: "5 min read",
        content: {
            introduction: "React Hooks have become an essential part of modern React development. They allow developers to use state and other React features without writing a class component. In this article, we'll explore what React Hooks are, how they work, and how you can use them to simplify your React code.",
            sections: [
                {
                    title: "Introduction to React Hooks",
                    body: "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They allow you to use state and lifecycle methods in functional components, making your code cleaner and easier to understand."
                },
                {
                    title: "Commonly Used Hooks",
                    body: "Some of the most commonly used hooks include useState for managing state, useEffect for side effects, and useContext for accessing context. Each hook serves a specific purpose and can be combined to create powerful components."
                },
                {
                    title: "Custom Hooks",
                    body: "Custom hooks are a way to reuse stateful logic across multiple components. They are JavaScript functions that start with 'use' and can call other hooks. This allows you to abstract away complex logic and keep your components clean." 
                }
            ],
            conclusion: "React Hooks have revolutionized the way we write React components. They provide a more intuitive and flexible way to manage state and side effects, making it easier to build complex applications. Whether you're new to React or an experienced developer, learning how to use hooks effectively can greatly enhance your development experience."  
        }
    },
    {
        id: 2,
        title: "Getting Started with TypeScript",
        excerpt: "Learn how to integrate TypeScript into your React projects for better code quality.",
        date: "2024-05-15",
        author: "Jeremiah Bankole",
        category: "TypeScript",
        tags: ["TypeScript", "React", "JavaScript"],
        banner: "typescript.png",
        read_time: "7 min read",
        content: {
            introduction: "TypeScript is a powerful tool that can help improve the quality and maintainability of your code. It adds static typing to JavaScript, which can catch errors early and provide better tooling support. In this article, we'll explore how to get started with TypeScript in your React projects and the benefits it can bring.",
            sections: [
                {
                    title: "Why Use TypeScript?",
                    body: "TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors at compile time, improves code readability, and provides better tooling support. Using TypeScript can lead to more robust and maintainable code."
                },
                {
                    title: "Setting Up TypeScript in a React Project",
                    body: "To set up TypeScript in a React project, you can use Create React App with the TypeScript template. This will configure your project with the necessary dependencies and settings to start using TypeScript right away." 
                },
                {
                    title: "TypeScript Basics",
                    body: "Some of the basic features of TypeScript include type annotations, interfaces, and enums. Type annotations allow you to specify the types of variables and function parameters, while interfaces help define the shape of objects. Enums provide a way to define a set of named constants."
                }
            ],
            conclusion: "Integrating TypeScript into your React projects can significantly improve the quality and maintainability of your code. It provides a powerful type system that helps catch errors early and enhances the development experience. Whether you're new to TypeScript or looking to deepen your understanding, learning how to use it effectively can greatly benefit your projects."  
        }
    },
    {
        id: 3,
        title: "Building a Portfolio Website with Next.js",
        excerpt: "Step-by-step guide to creating a personal portfolio website using Next.js.",
        date: "2024-06-01",
        author: "Jeremiah Bankole",
        category: "Next.js",
        tags: ["Next.js", "React", "JavaScript"],
        banner: "modern-portfolio.jpg",
        read_time: "10 min read",
        content: {
            introduction: "In this article, we'll walk through the process of building a personal portfolio website using Next.js. Next.js is a powerful React framework that offers features like server-side rendering and static site generation, making it an excellent choice for creating fast and SEO-friendly websites.",
            sections: [
                {
                    title: "Why Choose Next.js for Your Portfolio?",
                    body: "Next.js is a powerful React framework that offers features like server-side rendering, static site generation, and API routes. These features make it an excellent choice for building a portfolio website that is fast, SEO-friendly, and easy to maintain."
                },
                {
                    title: "Setting Up Your Next.js Portfolio",
                    body: "To set up your Next.js portfolio, you can start by creating a new Next.js project using Create Next App. This will give you a basic structure to work with, and you can customize it to fit your personal style and content."    
                },
                {
                    title: "Adding Content and Customization",
                    body: "Once you have your Next.js project set up, you can start adding content such as your projects, blog posts, and about section. You can also customize the design using CSS or a UI framework like Tailwind CSS to make your portfolio stand out."
                }
            ],
            conclusion: "Building a portfolio website with Next.js allows you to showcase your work in a professional and efficient manner. With its powerful features and ease of use, Next.js can help you create a stunning portfolio that highlights your skills and projects effectively."  
        }
    },
];