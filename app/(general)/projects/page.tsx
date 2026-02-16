
import Hero from '@/components/general/Hero'
import SubProjects from '@/components/projects/SubProjects'

const ProjectsPage = () => {

    return (
        <div className='min-h-screen'>
            <Hero 
                title='My Projects' 
                subtitle='A showcase of my work and accomplishments.' 
                action={[{"title": "View All Projects", "location": "/projects"}, {"title": "Contact Me", "location": "/contact"}]} 
                bgImage='hero-bg.jpg' 
            />
            <SubProjects />
        </div>
    )
}

export default ProjectsPage