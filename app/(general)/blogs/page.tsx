
import FeaturedBlogs from '@/components/blogs/FeaturedBlogs'
import Hero from '@/components/general/Hero'
import { blogs } from '@/data/blogs'

const BlogsPage = () => {

    return (
        <div className='min-h-screen'>
            <Hero 
                title='My Blogs' 
                subtitle='A collection of my thoughts and insights.'
                action={[{"title": "View All Blogs", "location": "/blogs"}, {"title": "Contact Me", "location": "/contact"}]} 
                bgImage='hero-bg.jpg' 
            />
            <FeaturedBlogs blogs={blogs} />
        </div>
    )
}

export default BlogsPage