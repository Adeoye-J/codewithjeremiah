import { Blog } from '@/types/blog'
import BlogList from './BlogList'
import { Space_Grotesk } from 'next/font/google'
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const FeaturedBlogs = ({ blogs }: { blogs: Blog[] }) => {

    return (
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto space-y-2 mb-12 flex items-center justify-between">
                <div className="">
                    <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-white`}>
                        Latest from the Blogs
                    </h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        Technical insights for curious minds and professional developers.
                    </p>
                </div>

                <Link href={"/blogs"} className='flex item-center gap-3 group'>
                    <span>View All Blogs</span>
                    <ArrowRight size={24} className='group-hover:translate-x-2' />
                </Link>
            </div>

            <BlogList blogs={blogs} />

            {/* <div className="flex justify-center mt-10">
                <Button variant="outline" size='medium' className="mx-auto mt-8">View More</Button>
            </div> */}
        </div>
    )
}

export default FeaturedBlogs