"use client"

import { useParams } from 'next/navigation'
import { projects } from '@/data/projects'
import Hero from '@/components/general/Hero'
import ProjectDetails from '@/components/projects/ProjectDetails'

const ProjectDetailsPage = () => {

    const {id} = useParams()
    const projectItem = projects.find((item) => item.title.replace(" ", "-").toLowerCase() === String(id).toLowerCase())
    
    return (
        <div className='min-h-screen'>
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