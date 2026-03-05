"use client"

import { useState } from 'react';
import ProjectCard from './ProjectCard'
import { Project } from '@/types/project';
import FilterItems from '../general/FilterItems';
import { types, stacks } from '@/data/projectFilters';

const ProjectList = ({projects} : { projects: Project[] }) => {
    const [type, setType] = useState("");
    const [stack, setStack] = useState("");
    const [search, setSearch] = useState("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    const filterItems = () => {
        const filtered = projects.filter((project) => {
            const matchesType = type ? String(project.type).toLowerCase() === type.toLowerCase() : true;
            const matchesStack = stack
                ? String(project.techStack).toLowerCase().includes(stack.toLowerCase())
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
            <FilterItems 
                firstFilter={type} 
                secondFilter={stack} 
                search={search} 
                setSearch={setSearch} 
                setFirstFilter={setType} 
                setSecondFilter={setStack} 
                filterItems={filterItems} 
                firstFilters={types}
                secondFilters={stacks}
            />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center-safe">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} bgImage={project.image} primaryColor={project.primaryColor} title={project.title} description={project.description} stack={project.techStack} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList