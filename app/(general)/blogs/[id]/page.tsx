import BlogDetails from '@/components/blogs/BlogDetails'
import Header from '@/components/general/Header'

const BlogDetailsPage = () => {

    return (
        <>
            <div className="w-full mx-auto px-6 md:px-12 lg:px-20 bg-blue-950 dark:bg-black">
                <Header />
            </div>
            <BlogDetails />
        </>
    )
}

export default BlogDetailsPage