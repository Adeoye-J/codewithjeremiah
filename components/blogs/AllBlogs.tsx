import { Blog } from '@/types/blog'
import BlogItem from './BlogItem'

const AllBlogs = ({ blogs }: { blogs: Blog[] }) => {

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default AllBlogs