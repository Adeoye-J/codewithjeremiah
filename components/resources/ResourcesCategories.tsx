// import { Button } from '../ui/button';
import { Space_Grotesk } from 'next/font/google'
import { resources } from '@/data/resources';
import Image from 'next/image';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ResourcesCategories = () => {

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
                        resources.map((item, index) => {

                            const navRoute = item.name?.toLowerCase().replace(/\s+/g, '-');
                            
                            return (
                                <div key={index} className="border md:border-2 border-blue-950">
                                    <div className="w-full h-62.5 flex-1">
                                        <Link href={`/resources/${navRoute}`} className="inline-block flex-1 w-full h-full overflow-hidden">
                                            <Image src={item.coverImage} alt={item.name} width={600} height={400} className='w-full h-full object-cover inline-block hover:scale-105 transition-all duration-500'/>
                                        </Link>
                                    </div>
                                    <div className="p-2 flex flex-col gap-2 justify-between flex-1">
                                        <Link href={`/resources/${navRoute}`} className="inline-block">
                                            <h3 className={`${spaceGrotesk.className} text-xl md:text-2xl font-bold dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300`}>{item.name}</h3>
                                        </Link>
                                        <p className='text-gray-600 dark:text-gray-300 italic text-sm'>{item.excerpt}</p>
                                        {/* <Button size='small' variant='secondary' href={`/resources/${navRoute}`} className='inline-block md:hidden'>Explore</Button> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ResourcesCategories