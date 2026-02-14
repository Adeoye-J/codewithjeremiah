"use client"

import { useParams } from 'next/navigation'
import Header from '@/components/general/Header'
import { projects } from '@/data/projects'

const ProjectDetails = () => {

    const {id} = useParams()
    const projectItem = projects.find((item) => item.title.replace(" ", "-").toLowerCase() === String(id).toLowerCase())

    return (
        <div>
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                <Header />
            </div>
            <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20">

                <div className="max-w-7xl mx-auto">
                    <img src={`/images/${projectItem?.image}`} alt="Project Image" />

                    <div className="">
                        <h2>{projectItem?.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails