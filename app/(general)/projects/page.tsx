
import Hero from '@/components/general/Hero'
import ProjectCard from '@/components/projects/ProjectCard'

const ProjectsPage = () => {

    return (
        <div className='min-h-screen'>
            <Hero title='My Projects' subtitle='A showcase of my work and accomplishments.' action1='View All Projects' action2='Contact Me' bgImage='hero-bg.jpg' />
            <ProjectCard bgImage='hero-bg-1.jpg' />
        </div>
    )
}

export default ProjectsPage