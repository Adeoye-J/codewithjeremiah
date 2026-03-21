"use client"

import { useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { navItems } from '@/data/navItems'
import { Cross, MenuIcon } from 'lucide-react'

const Header = () => {

    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="shadow-2xl bg-white sticky top-0 z-50">
            <div className={`container mx-auto p-3 md:px-8 flex items-center justify-between`}>
                <Link href="/">
                    <Image src={"/logos/jeremiah-logo-green.png"} alt="Jeremiah's Logo" className="w-36" width={200} height={80} />
                </Link>

                <nav className='hidden sm:block'>
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className={`text-slate-600 hover:text-secondary font-semibold text-xs lg:text-sm transition-colors ${pathname.includes(item.href) ? 'text-secondary' : 'text-slate-600'}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='hidden sm:flex items-center gap-4'>
                    <Button variant={"ghost"} className='cursor-pointer p-3'>
                        Sign In
                    </Button>
                    <Button variant={"secondary"} className='cursor-pointer p-3'>
                        Get Started
                    </Button>
                </div>

                <MenuIcon size={24} className='block sm:hidden cursor-pointer' onClick={() => setMenuOpen(true)} />

                {menuOpen && (
                    <div className="block sm:hidden">
                        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}></div>
                        <div className="fixed min-h-screen h-full top-0 right-0 bg-primary rounded-md shadow-lg w-[70%] z-50">
                            
                            <div className='absolute top-6 right-3 text-white cursor-pointer' onClick={() => setMenuOpen(false)}>
                                <Cross size={24} className='rotate-45 ' />
                            </div>
                            
                            <ul className="flex flex-col mt-20">
                                {navItems.map((item) => (
                                    <li key={item.name} className='border-t'>
                                        <Link href={item.href} className={`block text-sm hover:text-white font-semibold transition-colors p-6 ${pathname === item.href ? 'text-white' : 'text-white/70'}`} onClick={() => setMenuOpen(false)}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex flex-col items-start border-t p-6 gap-4">
                                <Button className={`p-6 text-sm border-white cursor-pointer`} p-6 variant={"secondary"} onClick={() => (setMenuOpen(false), router.push("/sign-in"))}>Sign In</Button>
                                <Button className={`p-6 text-sm border-white cursor-pointer`} variant={"secondary"} onClick={() => (setMenuOpen(false), router.push("/sign-up"))}>Get Started</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header