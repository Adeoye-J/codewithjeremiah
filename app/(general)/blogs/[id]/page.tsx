"use client"

import Header from '@/components/general/Header'
import { blogs } from '@/data/blogs'
import { useParams } from 'next/navigation'
import { Space_Grotesk } from 'next/font/google'
import formatDate from '@/lib/formatDate'
import BlogItem from '@/components/blogs/BlogItem'
import Link from 'next/link'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const BlogDetails = () => {

    const {id} = useParams()
    const projectItem = blogs.find((item) => item.title.replace(/\s+/g, "-").toLowerCase() === String(id).toLowerCase())

    return (
        <>
            <div className="w-full mx-auto px-6 md:px-12 lg:px-20 bg-blue-950 dark:bg-black">
                <Header />
            </div>
            <div className="bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20 min-h-screen py-6 md:py-12">
                {projectItem ? (
                    <div className="space-y-4 max-w-7xl mx-auto">
                        <div className="flex flex-col items-center mb-4 md:mb-8">
                            <div className="flex items-center gap-2">
                                <p className='text-xs md:text-sm lg:text-base text-gray-500'>{projectItem.category}</p>
                                <span>·</span>
                                <p className='text-xs md:text-sm lg:text-base text-gray-500'>{projectItem.read_time}</p>
                            </div>
                            <h1 className={`text-xl md:text-2xl lg:text-4xl font-bold ${spaceGrotesk.className}`}>{projectItem.title}</h1>
                        </div>

                        <div className="">
                            <img src={`/images/${projectItem.banner}`} alt={projectItem.title} className='w-full h-auto object-cover rounded-lg mb-6' />
                        </div>

                        <div className="">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="">
                                    <h4 className='text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300'>Published</h4>
                                    <p className='text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400'>{formatDate(projectItem.date)}</p>
                                </div>
                                <div className="">
                                    <h4 className='text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300'>Category</h4>
                                    <p className='text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400'>{projectItem.category}</p>
                                </div>
                                <div className="">
                                    <h4 className='text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300'>Read Time</h4>
                                    <p className='text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400'>{projectItem.read_time}</p>
                                </div>
                                <div className="">
                                    <h4 className='text-sm md:text-base lg:text-lg font-medium text-gray-700 dark:text-gray-300'>Author</h4>
                                    <p className='text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400'>{projectItem.author}</p>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-12 text-gray-700 dark:text-gray-300 space-y-4">
                                {/* Introduction */}
                                <div className="mb-8 space-y-3">
                                    <h2 className={`text-base md:text-lg lg:text-xl font-semibold ${spaceGrotesk.className}`}>Introduction</h2>
                                    <p className='text-sm md:text-base lg:text-lg text-justify'>{projectItem.content.introduction}</p>
                                </div>

                                {/* Sections */}
                                {
                                    projectItem.content.sections.map((section, index) => (
                                        <div key={index} className="space-y-3 mb-8">
                                            <h2 className={`text-base md:text-lg lg:text-xl font-semibold ${spaceGrotesk.className}`}>{section.title}</h2>
                                            <p className='text-sm md:text-base lg:text-lg text-justify'>{section.body}</p>
                                        </div>
                                    ))
                                }

                                {/* Conclusion */}
                                <div className="mb-8 space-y-3">
                                    <h2 className={`text-base md:text-lg lg:text-xl font-semibold ${spaceGrotesk.className}`}>Conclusion</h2>
                                    <p className='text-sm md:text-base lg:text-lg text-justify'>{projectItem.content.conclusion}</p>
                                </div>

                            </div>

                            {/* Recent Blogs */}
                            <div className="mt-28">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className={`text-base md:text-lg lg:text-xl font-semibold ${spaceGrotesk.className}`}>Recent Blogs</h2>
                                    <Link href="/blogs" className="inline-block text-sm text-blue-600 dark:text-blue-400 underline">View All Blogs</Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {blogs.slice(0, 3).map((blog, index) => (
                                        <BlogItem key={index} blog={blog} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='text-center text-gray-500'>Blog not found.</p>
                )}
            </div>
        </>
    )
}

export default BlogDetails