"use client"

import { useState } from "react"
import FilterItems from "../general/FilterItems"
import Image from "next/image"
import Link from "next/link"
import { Space_Grotesk } from "next/font/google"
import { resources } from "@/data/resources"
import { Resource, ResourceContent } from "@/types/resource"
import { useParams } from "next/navigation"
import ItemNotFound from "../general/ItemNotFound"
import Button from "@/utils/Button"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ResourceCategoryList = () => {

    const {id} = useParams()
    const resourceItem = resources.find((item) => item.name.replace(/\s+/g, "-").toLowerCase() === String(id).toLowerCase())

    // const resourceItemRoute = resourceItem?.name?.toLowerCase().replace(/\s+/g, '-')
    const resourceItemRoute = String(id).toLowerCase()

    const [search, setSearch] = useState("")
    const [filteredResources, setFilteredResources] = useState(resourceItem ? resourceItem.content : [])

    const filterItems = () => {
        const filtered = resourceItem?.content.filter((item) => {
            // const matchesType = type ? String(item.type).toLowerCase() === type.toLowerCase() : true;
            // const matchesStack = stack
            //     ? String(item.techStack).toLowerCase().includes(stack.toLowerCase())
            //     : true;
            const matchesSearch = search                
                ? item.title.toLowerCase().includes(search.toLowerCase()) ||
                  item.preface.toLowerCase().includes(search.toLowerCase())
                : true;
            // return matchesType && matchesStack && matchesSearch;
            return matchesSearch;
        });
        if (filtered) {
            setFilteredResources(filtered);
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <Link href={`/resources`} className="p-2 md:px-5 text-xs md:text-sm border border-blue-950 bg-blue-950 text-white hover:bg-blue-900 transition-colors duration-500">
                    Go Back
                </Link>

                <FilterItems 
                    filterItems={filterItems}
                    search={search}
                    setSearch={setSearch}
                />
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center-safe">
                {
                (filteredResources && filteredResources.length !== 0) ?
                filteredResources?.map((resource : ResourceContent, index) => {

                    const navRoute = resource.title?.toLowerCase().replace(/\s+/g, '-');

                    return (
                        <div className=" bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-102" key={index}>
                            <div className="shrink-0 h-64 w-full relative">
                                <Image src={`/images/${resource.coverImage}`} alt={resource.title} width={600} height={400} className='w-full h-full object-cover' />
                            </div>

                            <div className="p-4">
                                <div className="flex flex-col gap-2">
                                    <Link href={`/resources/${resourceItemRoute}/${navRoute}`} className="inline-block">
                                        <h3 className={`${spaceGrotesk.className} text-lg md:text-xl font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}>{resource.title}</h3>
                                    </Link>
                                    <div className="flex items-center space-x-2 mt-1">
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>{resource.preface}</p>
                                    </div>
                                </div>
                                <Button size='small' variant='secondary' href={`/resources/${navRoute}`} className='inline-block md:hidden'>Explore</Button>
                                {/* <p className="text-sm text-gray-700 dark:text-gray-300">{resource.preface}</p> */}
                            </div>
                        </div>
                    )
                }): <ItemNotFound />}
            </div>
        </div>
    )
}

export default ResourceCategoryList