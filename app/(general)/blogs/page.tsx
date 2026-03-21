
import FeaturedBlogs from '@/components/blogs/FeaturedBlogs'
import Hero from '@/components/general/Hero'
import { blogs } from '@/data/blogs'

const BlogsPage = () => {

    return (
        <div className='min-h-screen'>
            <FeaturedBlogs blogs={blogs} />
        </div>
    )
}

export default BlogsPage