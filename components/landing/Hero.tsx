import React from 'react'
import Image from 'next/image'
import Header from '../general/Header';
import Button from '@/utils/Button';
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Hero = () => {
    return (
    <div className="mx-auto bg-cover bg-center bg-[url('/images/hero-bg-1.jpg')] bg-no-repeat bg-black/70 dark:bg-black/85 bg-blend-overlay flex flex-col items-center">
        <Header bgColor="bg-transparent dark:bg-transparent" />
        <section className='px-6 md:px-12 lg:px-20 container'>
            <div className="flex flex-col items-center justify-center text-center min-h-[60vh] sm:min-h-[80vh] px-4">
                <h1 className={`${spaceGrotesk.className} text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg max-w-2xl`}>Build, Learn, and Grow with Me</h1>
                {/* <p className={`${inter.className} text-lg md:text-xl lg:text-2xl font-light text-white mb-8 drop-shadow-lg max-w-6xl tracking-wider`}>Explore my projects, read my blogs, and get beginner-friendly resources to kickstart your tech journey. </p> */}
                <p className={`${inter.className} text-lg md:text-xl lg:text-2xl font-light text-white mb-8 drop-shadow-lg max-w-6xl tracking-wider`}>Practical tech blogs, real-world projects, and beginner-friendly courses.</p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Button className="tracking-wider" size='large'>Read Blogs</Button>
                    <Button variant="secondary" size='large' className="tracking-wider">View Projects</Button>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Hero