"use client"

import Button from '@/utils/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

  return (
    <header className="w-full py-4 px-6 bg-blue-950 text-white flex items-center justify-between">
      <img src="/logos/jeremiah-white-1.png" alt="Jeremiah Logo" className="h-20 w-auto" />
      <nav>
        <ul className="flex space-x-8">
            {navItems.map((item) => (
                <li key={item.name}>
                    <Link href={item.href} className={`hover:text-white font-semibold text-lg transition-colors ${pathname === item.href ? 'text-white' : 'text-white/40'}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
      </nav>
      <Button className='tracking-wider'>
        Let's Connect
      </Button>
    </header>
  )
}

export default Header