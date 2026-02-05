import Button from '@/utils/Button';
import { GithubIcon } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ProjectCard = ({ bgImage }: { bgImage?: string }) => {
    const imageUrl = `/images/${bgImage || 'hero-bg-1.jpg'}`

    return (
        <div className='m-12'>
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg group">
                <div
                    className="w-full h-full bg-blue-600/10 bg-cover bg-center bg-no-repeat bg-blend-overlay relative rounded-l-[30px] overflow-hidden"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="absolute top-0 left-0 w-[50px] h-full rounded-r-[30px] bg-black hidden group-hover:block transition-all duration-500 z-20">
                        <div className="flex flex-col items-center justify-center h-full">
                            <GithubIcon className="text-white hover:text-blue-950 m-4" size={28} />
                            <GithubIcon className="text-white hover:text-blue-950 m-4" size={28} />
                            <GithubIcon className="text-white hover:text-blue-950 m-4" size={28} />
                            <GithubIcon className="text-white hover:text-blue-950 m-4" size={28} />
                        </div>
                    </div>

                </div>

                <div className="w-full h-full absolute top-0 left-[24px] right-0 bottom-0 bg-blue-950 hidden group-hover:flex transition-opacity duration-500 items-center justify-center">
                    <div className="p-4 text-white ml-[30px] mr-[20px] space-y-5 my-4">
                        <h3 className={`${spaceGrotesk.className} text-white font-bold text-xl`}>Project Title</h3>
                        <p className={`${spaceGrotesk.className} mb-2`}>A brief description of the project goes here. It highlights the main features and technologies used.</p>
                        <p className={`${spaceGrotesk.className} text-sm text-gray-300`}>Tech Stack: React, Next.js, Tailwind CSS</p>
                        <Button size='small'>View Details</Button>
                    </div>
                </div>
                
                <h3 className={`${spaceGrotesk.className} text-white font-bold text-xl p-4 border bg-blue-950 inline-block absolute -top-8 transform translate-x-1/2`}>Project Title</h3>
            </div>
        </div>
    )
}

export default ProjectCard
