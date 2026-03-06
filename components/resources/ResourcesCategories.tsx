import Button from '@/utils/Button'
import { Space_Grotesk } from 'next/font/google'
import { resources } from '@/data/resources';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ResourcesCategories = () => {

    const categories = [
        {
            name: "CheatSheets",
            excerpt: "Find great and easy to use collections of cheatsheets for various programming languages here.",
            coverImage: "/images/handshake.jpg",
            link: "/resources/cheatsheets",
        },
        {
            name: "Architectures",
            excerpt: "Understand fully how architecture works and best implementation approach.",
            coverImage: "/images/woman-with-bag.jpg",
            link: "/resources/architectures"
        },
        {
            name: "System Design",
            excerpt: "Fully understand how system design works as a developer - across all professional levels.",
            coverImage: "/images/summary-resources.jpg",
            link: "/resources/system-design"
        }
    ]

    return (
        <div className="py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
                <h3 className='font-semibold text-xs dark:text-white'>Quick Snapshot</h3>
                <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl font-extrabold dark:text-white`}>
                    Resources Categories
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    Resources gets updated weekly.
                </p>
            </div>

            <div className="max-w-7xl mx-auto text-center space-y-2 mb-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        categories.map((item, index) => (
                            <div key={index} className="border">
                                <div className="w-full h-62.5 flex-1">
                                    <Image src={item.coverImage} alt={item.name} width={600} height={400} className='w-full h-full object-cover'/>
                                </div>
                                <div className="p-2 flex flex-col gap-2 justify-between flex-1">
                                    <h2 className={`${spaceGrotesk.className} text-xl md:text-2xl`}>{item.name}</h2>
                                    <p className='text-gray-600 italic text-sm'>{item.excerpt}</p>
                                    <Button size='small' variant='secondary' href={item.link} className='inline-block'>Explore</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ResourcesCategories