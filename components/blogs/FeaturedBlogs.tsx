import { Blog } from '@/types/blog'
import BlogList from './BlogList'
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const FeaturedBlogs = ({ blogs }: { blogs: Blog[] }) => {

    return (
        <div className="py-12 md:py-20">
            <div className="container px-3 md:px-8 mx-auto">
                <div className="mb-12 flex flex-col sm:flex-row items-start sm:item-center justify-between gap-2">
                    <div className="space-y-2">
                        <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-extrabold tracking-tight`}>
                            Latest from the Blogs
                        </h2>
                        <p className="text-lg text-on-surface">
                            Technical insights for curious minds and professional developers.
                        </p>
                    </div>

                    <Link href={"/blogs"} className='flex items-center gap-2 group text-tertiary cursor-pointer hover:underline'>
                        <span className="font-bold">View All Blogs</span>
                        <ArrowRight size={20} className='group-hover:translate-x-2 transition-all duration-500' />
                    </Link>
                </div>

                <BlogList blogs={blogs} filter={false} />
            </div>
        </div>
    )
}

export default FeaturedBlogs