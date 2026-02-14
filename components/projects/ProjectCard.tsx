import Button from '@/utils/Button';
import { GithubIcon, WholeWord } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ProjectCard = ({ bgImage, primaryColor, title, description, stack }: { bgImage?: string, primaryColor?: string, title?: string, description?: string, stack?: string[] }) => {
    const imageUrl = `/images/${bgImage || 'hero-bg-1.jpg'}`

    const navRoute = title?.replace(" ", "-").toLowerCase()

    return (
                <div
                    className="w-full h-75 md:w-full md:h-85 rounded-lg group bg-blue-600/10 bg-cover bg-center bg-no-repeat bg-blend-overlay relative rounded-l-[30px] overflow-hidden"
                    style={{ backgroundImage: `url(${imageUrl})`, boxShadow: `0 4px 15px ${primaryColor}40` }}
                >
                    <div className="absolute top-0 left-0 w-12.5 h-full rounded-r-[30px] bg-blue-950/50 opacity-0 group-hover:opacity-100 block transition-all duration-500 z-20">
                        <div className="flex flex-col items-center justify-center h-full">
                            <GithubIcon className="text-white hover:text-blue-950 m-4" size={28} />
                            <WholeWord className="text-white hover:text-blue-950 m-4" size={28} />
                        </div>
                    </div>

                    <div className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 rounded-l-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`} style={{backgroundColor: `${primaryColor}`}}>
                        <div className="p-4 text-white ml-[15%] mr-8 space-y-5 my-4 overflow-auto max-h-[90%]">
                            <h3 className={`${spaceGrotesk.className} text-white font-bold text-xl`}>{title}</h3>
                            <p className={`${spaceGrotesk.className} mb-2`}>{description}</p>
                            <p className={`${spaceGrotesk.className} text-sm text-gray-300`}>Tech Stack: {stack?.join(', ')}</p>
                            {/* <Button size='small'>View Details</Button> */}
                            <Link href={`/projects/${navRoute}`} className='px-3 py-4 lg:px-6 lg:py-4 border-2 hover:bg-white hover:text-blue-950 transition-colors duration-500 cursor-pointer text-xs sm:text-sm font-medium bg-transparent text-white border-white hover:border-blue-950'>View Details</Link>
                        </div>
                    </div>

                    <h3 className={`${spaceGrotesk.className} text-white font-bold text-sm px-4 py-2 border inline-block rounded-lg absolute bottom-0 right-0 opacity-100 group-hover:opacity-0 transition-all duration-500`} style={{borderColor: `${primaryColor}`, backgroundColor: `${primaryColor}`}}>{title}</h3>
                </div>
    )
}

export default ProjectCard
