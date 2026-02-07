
import Hero from '@/components/general/Hero'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectList from '@/components/projects/ProjectList'
import SubProjects from '@/components/projects/SubProjects'
import { projects } from '@/lib/projects'

const ProjectsPage = () => {

    return (
        <div className='min-h-screen'>
            <Hero title='My Projects' subtitle='A showcase of my work and accomplishments.' action1='View All Projects' action2='Contact Me' bgImage='hero-bg.jpg' />
            <SubProjects />
            {/* <ProjectList projects={projects} /> */}
        </div>
    )
}

export default ProjectsPage