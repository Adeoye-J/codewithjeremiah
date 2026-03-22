import React from 'react'
import ProjectList from './ProjectList'
import { projects } from '@/data/projects'
import { Space_Grotesk } from 'next/font/google'
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const FeaturedProjects = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="container px-3 md:px-8 mx-auto">
                <div className="mb-12 space-y-2 flex flex-col items-start sm:items-center sm:justify-center">
                    <h2 className={`${spaceGrotesk.className} text-3xl lg:text-4xl font-extrabold tracking-tight`}>
                        Things I've Built
                    </h2>
                    <p className="text-lg text-on-surface sm:text-center max-w-2xl mx-auto">
                        Open-source tools and commercial projects that push the boundaries of the modern web.
                    </p>
                </div>

                <ProjectList projects={projects} filter={false} />

                {/* <div className="flex justify-center mt-10">
                    <Button variant="outline" size='medium' className="mx-auto mt-8">View More</Button>
                </div> */}

            </div>

        </div>
    )
}

export default FeaturedProjects