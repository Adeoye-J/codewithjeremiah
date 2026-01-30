"use client"

import Button from '@/utils/Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, MenuIcon, MenuSquare, MenuSquareIcon } from 'lucide-react'
import React from 'react'

const Header = ({bgColor = "bg-blue-950"}) => {

    const pathname = usePathname();

    const navItems = [
        // { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        {name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

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
        Let's Connect
      </Button>

      <Button className='block sm:hidden'>
        <MenuIcon size={24} />
      </Button>
    </header>
  )
}

export default Header