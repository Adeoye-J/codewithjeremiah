"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import { Project } from "@/types/projects";
import { useEffect } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ProjectFilters = ({projects, type, stack, search, setSearch, setType, setStack, filterProjects} : { projects: Project[], type: string, stack: string, search: string, setSearch: (search: string) => void, setType: (type: string) => void, setStack: (stack: string) => void, filterProjects: () => void }) => {

    useEffect(() => {
        // setType("");
        // setStack("");
        filterProjects();
    }, [type, stack, search]);

    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search projects..."
                    className={`${spaceGrotesk.className} w-full md:w-80 rounded-lg border px-4 py-2`}
                />

                <div className="flex gap-3">
                    <select className={`${spaceGrotesk.className} rounded-lg border px-3 py-2 dark:bg-black bg-gray-100 dark:text-white text-black`} value={type} onChange={(e) => { setType(e.target.value) }}>
                        <option value="">All Types</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="fullstack">Fullstack</option>
                    </select>

                    <select className={`${spaceGrotesk.className} rounded-lg border px-3 py-2 dark:bg-black bg-gray-100 dark:text-white text-black`} onChange={(e) => setStack(e.target.value)} value={stack}>
                        <option value="">All Stacks</option>
                        <option value="Next.js">Next.js</option>
                        <option value="React">React</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Tailwind CSS">Tailwind CSS</option>
                        <option value="Express.js">Express.js</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default ProjectFilters;
