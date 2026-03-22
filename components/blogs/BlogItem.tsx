import { Blog } from '@/types/blog'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import formatDate from '@/lib/formatDate';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const BlogItem = ({ blog } : { blog: Blog }) => {

    return (
        <div className="h-full flex flex-col bg-white rounded-4xl shadow-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 group">
            <div className="shrink-0 h-64 w-full relative overflow-hidden">
                <Image src={`/images/${blog.banner}`} alt={blog.title} width={600} height={400} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />
                <span className='absolute top-4 left-4 text-[10px] uppercase font-bold px-3 py-2 rounded-full bg-white/95 backdrop-blur text-secondary tracking-wider'>{blog.category}</span>
            </div>

            <div className="p-4 flex flex-col grow">
                <div className="space-y-3 grow">
                    <p className='text-xs text-gray-500 dark:text-gray-400 text-nowrap flex items-center gap-4'>
                        <span>{formatDate(blog.date)}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                        <span className='text-xs text-gray-500 dark:text-gray-400'>{blog.read_time}</span>
                    </p>
                    <h3 className={`${spaceGrotesk.className} text-2xl font-semibold text-black hover:text-secondary dark:text-white flex flex-col items-start md:flex-row justify-between md:items-center gap-2 md:gap-0`}>{blog.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{blog.excerpt}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem