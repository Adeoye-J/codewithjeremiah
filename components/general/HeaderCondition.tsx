"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header';
import Hero from './Hero';

const HeaderCondition = () => {

    const pathname = usePathname();

    return (
        <>
            {pathname !== "/" && <Header bgColor="bg-blue-950 dark:bg-black" otherStyles='px-6 md:px-12 lg:px-20' />}
        </>
    )
}

export default HeaderCondition