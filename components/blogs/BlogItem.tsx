import { Blog } from '@/types/blog'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const BlogItem = ({ blog } : { blog: Blog }) => {

    // const navRoute = blog.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const navRoute = blog.title?.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className=" bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-102">
            <div className="shrink-0 h-64 w-full relative">
                <Image src={`/images/${blog.banner}`} alt={blog.title} width={600} height={400} className='w-full h-full object-cover' />
            </div>

            <div className="p-4">
                <div className="mb-2">
                    <Link href={`/blogs/${navRoute}`} className="block">
                        <h3 className={`${spaceGrotesk.className} text-lg font-semibold text-black hover:text-gray-700 dark:text-white flex flex-col items-start md:flex-row justify-between md:items-center gap-2 md:gap-0`}>{blog.title} <span className='text-xs text-gray-500 dark:text-gray-400 text-nowrap'>{blog.date}</span></h3>
                    </Link>
                    <div className="flex items-center space-x-2 mt-1">
                        <p className='text-xs text-gray-500 dark:text-gray-400'>{blog.category}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">||</span>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>{blog.read_time}</p>
                    </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
            </div>
        </div>
    )
}

export default BlogItem