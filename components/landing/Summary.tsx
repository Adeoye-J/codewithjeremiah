import React from 'react'
import { Inter, Space_Grotesk } from "next/font/google";
import Button from '@/utils/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowRightIcon, ChevronRight } from 'lucide-react';

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Summary = () => {

    const summaryItems = [
        { 
            section: "Blog",
            title: "Read technical posts on real problems", 
            description: "Deep dive into practical development challenges and solutions.",
            action: "Read",
            image: "/images/summary-blog.jpg",
            link: "/blogs"
        },
        { 
            section: "Projects",
            title: "See how things are actually built",
            description: "Real code, real decisions, real lessons learned",
            action: "Explore",
            image: "/images/summary-projects.jpg",
            link: "/projects"
        },
        { 
            section: "Courses",
            title: "Get hands-on with guided learning",
            description: "Step-by-step tutorials to build your skills from the ground up",
            action: "Start",
            image: "/images/summary-courses.jpg",
            link: "/courses"
        },
        {
            section: "Resources",
            title: "Free tools and materials to boost your learning",
            description: "Cheat sheets, code snippets, and more to aid your journey",
            action: "Access",
            image: "/images/summary-resources.jpg",
            link: "/resources"
        }
    ];

    return (
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2 mb-12">
                <h3 className='font-semibold text-xs dark:text-white'>Everything</h3>
                <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-white`}>
                    What you get here
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Overview of what to expect
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {summaryItems.map((item, index) => (
                    <div className="flex flex-col justify-between bg-white dark:bg-black rounded-lg shadow-md overflow-hidden" key={index}>
                        {/* Content */}
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <div className="space-y-4">
                                <h4 className="text-xs dark:text-white font-semibold">{item.section}</h4>
                                <h3 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold dark:text-white`}>{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 italic">{item.description}</p>
                            </div>
                            <Link href={item.link} className="mt-4 text-blue-600 dark:text-blue-400 flex items-center gap-1 font-medium group text-sm">
                                {item.action} <span className="group-hover:translate-x-1 transition-transform"><ChevronRight width={16} height={16} /></span>
                            </Link>
                        </div>

                        {/* Image */}
                        <div className="">
                            <Image src={item.image} alt={item.section} width={600} height={400} className="" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="text-center">
                    <h3 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold dark:text-white`}>Ready to get started?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Join me on this journey of learning and building.</p>
                    <Button variant='secondary' className="mt-4">Start Learning</Button>
                </div>
            </div>
        </div>
    )
}

export default Summary