
import Image from 'next/image';
import { Button } from '../ui/button';
import { Inter, Space_Grotesk } from "next/font/google";
import { Mail, Sparkle, Sparkles } from 'lucide-react';

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Hero = () => {
    
    return (
        <div className={`bg-cover bg-center bg-no-repeat `}>
            <div className="container mx-auto px-2 md:px-8 py-12 md:py-20 flex flex-col items-center">
                <section className={`flex flex-col md:flex-row items-center text-center md:text-start w-full gap-10 md:gap-4`}>
                    <div className="flex flex-col items-center md:items-start justify-center flex-1 space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-xs font-bold tracking-widest uppercase">
                            <Sparkles size={20} />
                            New Course: Master Tailwind CSS
                        </div>
                        <h1 className={`${spaceGrotesk.className} text-3xl md:text-5xl lg:text-7xl font-extrabold drop-shadow-lg`}>Build, Learn, and <span className='text-secondary'>Grow With Me</span></h1>
                        <p className={`${inter.className} text-lg md:text-xl font-light drop-shadow-lg tracking-wider`}>A curated blend of technical deep-dives, production-ready project breakdowns, and structured courses designed for the modern developer.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="secondary" size="lg" className="p-6 md:p-8 rounded-xl font-bold text-lg cursor-pointer shadow-xl shadow-secondary/25 hover:shadow-2xl hover:-translate-y-1 hover:transition-all">Start Learning</Button>
                            <Button variant="ghost" size="lg" className="p-6 md:p-8 rounded-xl font-bold text-lg cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">View Projects</Button>
                        </div>
                    </div>

                    {/* Side Image */}
                    <div className='flex-1'>
                        <Image className='w-full rounded-2xl' width={1200} height={800} src="/images/summary-projects.jpg" alt='Hero Image showing a Laptop' />
                    </div>
                </section>
            </div>
        </div>
  );
}

export default Hero