import Hero from '@/components/general/Hero'

const ResourcesPage = () => {
    return (
        <div className='min-h-screen'>
            <Hero 
                title='Resources' 
                subtitle='Find valuable resources for your tech journey'
                action={[{"title": "Courses", "location": "/courses"}, {"title": "My Blogs", "location": "/blogs"}]} 
                bgImage='hero-bg.jpg' 
            />
        </div>
    )
}

export default ResourcesPage