import React from 'react'
import { footerItems } from '@/data/footerItems'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className='py-4 px-6 md:px-12 lg:px-20 bg-blue-950 dark:bg-black md:py-8'>
            <div className="max-w-7xl mx-auto py-6 md:py-8 lg:py-12 border-y border-white dark:border-gray-800 text-center">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-4">
                    {
                        footerItems.map((item, index) => (
                            
                            <div className="flex flex-col items-start gap-4" key={index}>
                                {
                                    item.map((link, linkIndex) => (
                                        <a 
                                            key={linkIndex}
                                            href={link.href} 
                                            className={`text-sm text-start text-gray-300 hover:text-white mx-2 ${linkIndex < item.length - 1 ? 'mr-4' : ''}`}
                                        >
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </div>
                            
                        ))
                    }
                </div>


                {/* <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Code with Jeremiah. All rights reserved.</p> */}
            </div>
            <div className="max-w-7xl mx-auto my-4 flex flex-col md:flex-row items-center justify-between gap-2">
                <Image src={"/logos/jeremiah-white-1.png"} alt="Code with Jeremiah Logo" className="" width={150} height={60} />

                <p className='text-sm text-gray-400'>&copy; {new Date().getFullYear()} Code with Jeremiah.</p>
            </div>
        </footer>
    )
}

export default Footer