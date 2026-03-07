"use client"

import { resources } from '@/data/resources'
import { useParams } from 'next/navigation'
import { Space_Grotesk } from 'next/font/google'
import ResourceCategoryList from './ResourceCategoryList';
import { Resource } from '@/types/resource';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ResourceCategory = () => {

    const {id} = useParams()
    const resourceItem = resources.find((item) => item.name.replace(/\s+/g, "-").toLowerCase() === String(id).toLowerCase())
    
    return (
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
                <h3 className='font-semibold text-xs dark:text-white'>Resource Snapshot</h3>
                <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-white`}>
                    {resourceItem?.name}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Click to view details
                </p>
            </div>
            
            <ResourceCategoryList />
        </div>
    )
}

export default ResourceCategory