"use client"

import { useParams } from 'next/navigation'
import Header from '@/components/general/Header'
import { projects } from '@/data/projects'
import Hero from '@/components/general/Hero'
import ProjectDetails from '@/components/projects/ProjectDetails'

const ProjectDetailsPage = () => {

    const {id} = useParams()
    const projectItem = projects.find((item) => item.title.replace(" ", "-").toLowerCase() === String(id).toLowerCase())
    
    return (
        <div>
            {/* <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
                <Header />
            </div> */}
            <Hero 
                title={projectItem?.title || "Project Details"} 
                subtitle={projectItem?.description || "Details about this project"} 
                bgImage={projectItem?.image || "hero-bg.jpg"} 
                action={projectItem?.links || [{title: "", location: ""}, {title: "", location: ""}]}
                target='_blank'
            />
            <ProjectDetails projectItem={projectItem} />
        </div>
    )
}

export default ProjectDetailsPage