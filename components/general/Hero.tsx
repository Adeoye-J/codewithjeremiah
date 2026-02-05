
import Header from './Header';
import Button from '@/utils/Button';
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Hero = ({title, subtitle, action1, action2, bgImage, heightClass} : {title?: string, subtitle?: string, action1?: string, action2?: string, bgImage?: string, heightClass?: string}) => {
    const imageUrl = `/images/${bgImage || 'hero-bg-1.jpg'}`
    return (
        <div className={`px-6 md:px-12 lg:px-20 bg-cover bg-center bg-no-repeat bg-black/70 dark:bg-black/85 bg-blend-overlay`} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="mx-auto max-w-7xl flex flex-col items-center">
                <div className="w-full">
                    <Header bgColor="bg-transparent dark:bg-transparent" />
                </div>
                <section className={` ${heightClass || 'min-h-100 sm:min-h-125'} flex flex-col items-center justify-center text-center py-20 w-full`}>
                    <div className="flex flex-col items-center justify-center text-center px-2">
                        <h1 className={`${spaceGrotesk.className} text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg max-w-2xl`}>{title}</h1>
                        <p className={`${inter.className} text-lg md:text-xl lg:text-2xl font-light text-white mb-8 drop-shadow-lg max-w-6xl tracking-wider`}>{subtitle}</p>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <Button className="tracking-wider" size='large'>{action1}</Button>
                            <Button variant="secondary" size='large' className="tracking-wider">{action2}</Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  );
}

export default Hero