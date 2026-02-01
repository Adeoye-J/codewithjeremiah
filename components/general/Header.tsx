"use client"

import { useState } from 'react'
import Button from '@/utils/Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/lib/navItems'
import { Cross, Menu, MenuIcon, MenuSquare, MenuSquareIcon } from 'lucide-react'

const Header = ({ bgColor = "bg-blue-950" }) => {

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`container mx-auto w-full py-4 px-6 md:px-12 lg:px-20 ${bgColor} text-white flex items-center justify-between`}>
            <Link href="/">
                <Image src={"/logos/jeremiah-white-1.png"} alt="Jeremiah Logo" className="" width={200} height={80} />
            </Link>

            <nav className='hidden sm:block'>
                <ul className="flex space-x-3 lg:space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className={`hover:text-white font-semibold text-xs lg:text-base transition-colors ${pathname === item.href ? 'text-white' : 'text-white/50'}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Button className='tracking-wider hidden sm:block'>
                Sign in
            </Button>

            <Button className='block sm:hidden' onClick={() => setMenuOpen(true)}>
                <MenuIcon size={24} />
            </Button>

            {menuOpen && (
                <div className="block sm:hidden">
                    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>
                    <div className="fixed min-h-screen h-full top-0 right-0 bg-blue-950 dark:bg-black rounded-md shadow-lg w-[70%] z-50">
                        
                        <Button className='absolute top-6 right-6 group' onClick={() => setMenuOpen(false)}><Cross size={24} className='rotate-45 group-hover:rotate-180 transition-all duration-500' /></Button>
                        
                        <ul className="flex flex-col mt-16">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className={`block hover:text-white font-semibold text-base transition-colors p-6 ${pathname === item.href ? 'text-white' : 'text-white/70'}`} onClick={() => setMenuOpen(false)}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>

                        <Button className='w-full absolute bottom-0 left-0' onClick={() => setMenuOpen(false)}>Sign in</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header