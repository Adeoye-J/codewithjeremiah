"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header';
import Hero from '../landing/Hero';

const HeaderCondition = () => {

    const pathname = usePathname();

    return (
        <>
            {pathname !== "/" && <Header bgColor="bg-blue-950 dark:bg-black" />}
        </>
    )
}

export default HeaderCondition