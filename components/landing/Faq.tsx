import React from 'react'
import { Space_Grotesk } from "next/font/google";
import { ChevronsLeftRight, CodeXml, DollarSign, FolderKanban, Upload, WifiSync } from 'lucide-react';
import Button from '@/utils/Button';


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Faq = () => {

    const faqItems = [
        {
            icon: <ChevronsLeftRight size={30} />,
            question: "Who is this for?",
            answer: "Beginners learning to code, intermediate developers leveling up, and anyone curious about how software actually gets built."
        },
        {
            icon: <DollarSign size={30} />,
            question: "Are the courses free?",
            answer: "Blog posts and resources are free. Courses are paid micro-courses designed to teach specific, practical skills."
        },
        {
            icon: <FolderKanban size={30} />,
            question: "What topics do you cover?",
            answer: "Frontend, backend, DevOps, AI, and career advice. Each post and project focuses on real problems and real solutions."
        },
        {
            icon: <CodeXml size={30} />,
            question: "Can I use your code?",
            answer: "Yes. All project code and resources are available for learning and building. Check individual licenses for details."
        },
        {
            icon: <Upload size={30} />,
            question: "How often do you publish?",
            answer: "New posts and resources come out weekly. Subscribe to stay updated without checking back constantly."
        },
        {
            icon: <WifiSync size={30} />,
            question: "Do you offer mentorship?",
            answer: "Not currently, but the courses and projects are designed to teach you the way I'd teach in person."
        },
    ]

    return (
        <div className="bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20 ">
            <div className="max-w-7xl mx-auto">
                <h2 className={`${spaceGrotesk.className} text-3xl font-bold text-center dark:text-white`}>Frequently Asked Questions</h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mt-4">Common questions about the platform, courses and how to get most from it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto mt-10">
                {faqItems.map((item, index) => (
                    <div className="flex flex-col items-center text-center space-y-4 rounded-lg shadow-md p-6 md:p-8 mx-auto text-black dark:text-white" key={index}>
                        <span className='text-blue-600 dark:text-blue-400'>{item.icon}</span>
                        <h3 className='font-semibold dark:text-white'>{item.question}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.answer}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto py-8">
                <div className="text-center">
                    <h3 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold dark:text-white`}>Have more questions?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Reach out directly. I read every message.</p>
                    <Button variant='secondary' className="mt-4">Contact Me</Button>
                </div>
            </div>
        </div>
    )
}

export default Faq