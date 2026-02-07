import React from 'react'
import ProjectCard from './ProjectCard'

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubLink: string;
    primaryColor: string;
}

const ProjectList = ({projects} : { projects: Project[] }) => {

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:place-items-center">
                {projects.map((project) => (
                    <ProjectCard key={project.id} bgImage={project.image} primaryColor={project.primaryColor} title={project.title} description={project.description} stack={project.techStack} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList