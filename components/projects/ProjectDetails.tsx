import { Project } from '@/types/project'
import { projectIcons } from '@/data/projectIcons'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ProjectDetails = ({ projectItem } : { projectItem: Project | undefined }) => {

    return (
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20 ">

            <div className="max-w-7xl mx-auto space-y-2 mb-12">
                <div className="flex flex-1 items-start justify-between gap-4">
                    <div className="space-y-8">
                        <div className="" id='description'>
                            <h3 className={`${spaceGrotesk.className} font-semibold text-black dark:text-white mb-2`}>Detailed Description</h3>
                            <p className='text-justify'>{projectItem?.detailedDescription ?? projectItem?.description}</p>
                        </div>


                        <div className="" id='tech-stack'>
                            <h3 className={`${spaceGrotesk.className} font-semibold text-black dark:text-white mb-2`}>Tech Stack</h3>
                            <div className="flex flex-wrap gap-4 items-start">
                                {projectItem?.techStack.map((tech, index) => {
                                    const projectIcon = projectIcons.find((item) => item.skill.toLowerCase() === tech.toLowerCase())

                                    return (
                                        projectIcon 
                                        ? (
                                            <div className="flex flex-col items-center" key={index}>
                                                <div className="border-2 border-blue-800 rounded-full w-20 p-2">
                                                    <img src={projectIcon.icon} alt="image does not exist" className='w-full' />
                                                </div>
                                                <span className="px-3 py-1 border-2 border-blue-800 text-black dark:text-white mx-auto flex items-center justify-center text-center text-sm italic">{tech}</span>
                                            </div>
                                        ) 
                                        : <span key={index} className="px-3 py-1 border text-black dark:text-white rounded-full text-sm">{tech}</span>
                                    )
                                })}
                            </div>
                        </div>

                        
                    </div>

                    {/* Project Details Side Navigation Table of Contents */}
                    <div className="hidden lg:block w-1/4 min-w-75 border border-blue-800 bg-white dark:bg-black rounded-lg shadow-lg p-4">
                        <h3 className={`${spaceGrotesk.className} font-semibold text-black dark:text-white mb-4`}>Project Details Content</h3>
                        <ul className="space-y-2">
                            <li><a href="#description" className="text-blue-600 dark:text-blue-400 hover:underline">Description</a></li>
                            <li><a href="#tech-stack" className="text-blue-600 dark:text-blue-400 hover:underline">Tech Stack</a></li>
                            <li><a href="#architecture" className="text-blue-600 dark:text-blue-400 hover:underline">Architecture</a></li>
                            <li><a href="#challenges" className="text-blue-600 dark:text-blue-400 hover:underline">Challenges</a></li>
                            <li><a href="#lessons" className="text-blue-600 dark:text-blue-400 hover:underline">Lessons Learned</a></li>
                            <li><a href="#screenshots" className="text-blue-600 dark:text-blue-400 hover:underline">Screenshots</a></li>
                        </ul>
                    </div>
                    
                </div>

                {/* Other Project Details */}
                <div className=""></div>
            </div>

        </div>
    )
}

export default ProjectDetails