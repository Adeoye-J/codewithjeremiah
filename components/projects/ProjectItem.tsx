import { Project } from '@/types/project'
import React from 'react'
import { Button } from '../ui/button'
import { Code, CodeSquareIcon } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ProjectItem = ({ project }: { project: Project }) => {

    return (
        <div className="glass">
            <div className={`${(project.id === 2) ? "bg-tertiary-container" : "bg-secondary" }  text-on-tertiary p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between min-h-96 shadow-xl shadow-tertiary/10`}>
                <div className="relative z-10 space-y-4">
                    {/* <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full font-bold uppercase backdrop-blur-sm">TypeScript</span> */}
                    <div className="flex flex-wrap gap-2">
                        {
                            project.techStack.map((stack, id) => (
                                <span key={id} className="text-[10px] text-nowrap bg-white/20 px-2.5 py-1 rounded-full font-bold uppercase shadow-sm text-white">{stack}</span>
                            ))
                        }
                    </div>
                    <h3 className={`${spaceGrotesk.className} text-3xl font-bold text-white`}>{project.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed text-white">{project.description}</p>
                </div>
                <div className="relative z-10">
                    <Button variant={"ghost"} size={"lg"} className='bg-white/10 border border-white/20 p-6 rounded-xl text-white cursor-pointer font-bold flex items-center gap-2'>View Details <Code size={24} /></Button>
                    {/* <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">View Source <span className="material-symbols-outlined text-lg" data-icon="code">code</span></button> */}
                </div>
                {/* <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[200px] opacity-10 rotate-12" data-icon="terminal">terminal</span> */}
                <CodeSquareIcon className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-24" size={240} />
            </div>
        </div>
    )
}

export default ProjectItem