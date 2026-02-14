"use client"

import { useState } from 'react';
import ProjectCard from './ProjectCard'
import { Project } from '@/types/project';
import ProjectFilters from './ProjectsFilter';

const ProjectList = ({projects} : { projects: Project[] }) => {
    const [type, setType] = useState("");
    const [stack, setStack] = useState("");
    const [search, setSearch] = useState("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    const filterProjects = () => {
        const filtered = projects.filter((project) => {
            const matchesType = type ? project.type === type : true;
            const matchesStack = stack
                ? project.techStack.includes(stack)
                : true;
            const matchesSearch = search                
                ? project.title.toLowerCase().includes(search.toLowerCase()) ||
                  project.description.toLowerCase().includes(search.toLowerCase())
                : true;
            return matchesType && matchesStack && matchesSearch;
        });
        setFilteredProjects(filtered);
    };

    return (
        <div className="w-full">
            <ProjectFilters projects={projects} type={type} stack={stack} search={search} setSearch={setSearch} setType={setType} setStack={setStack} filterProjects={filterProjects} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center-safe">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} bgImage={project.image} primaryColor={project.primaryColor} title={project.title} description={project.description} stack={project.techStack} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList