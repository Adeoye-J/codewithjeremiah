import React from 'react'
import ProjectList from './ProjectList'
import { projects } from '@/data/projects'
import { Space_Grotesk } from 'next/font/google'
import Button from '@/utils/Button';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const SubProjects = () => {
    return (
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
                <h3 className='font-semibold text-xs dark:text-white'>Projects Snapshot</h3>
                <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-white`}>
                    Featured Projects
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hover to view details and tech stack
                </p>
            </div>

            <ProjectList projects={projects} />

            <div className="flex justify-center mt-10">
                <Button variant="outline" size='medium' className="mx-auto mt-8">View All Projects</Button>
            </div>
        </div>
    )
}

export default SubProjects