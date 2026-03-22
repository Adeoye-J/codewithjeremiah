
import FeaturedBlogs from '@/components/blogs/FeaturedBlogs'
import { blogs } from '@/data/blogs'

const BlogsPage = () => {

    return (
        <div className='min-h-screen'>
            <FeaturedBlogs blogs={blogs} />
        </div>
    )
}

export default BlogsPage