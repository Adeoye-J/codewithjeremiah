import Link from 'next/link';
import React from 'react'
import type { UrlObject } from 'url';
type Url = string | UrlObject | undefined;

const Button = ({ variant = "primary", size = "medium", onClick, children, target, className = "", href = "", ...props } : { variant?: string, size?: string, onClick?: () => void , children: React.ReactNode, target?: string, className?: string, href?: Url }) => {
  
    const baseClasses = "px-3 py-4 lg:px-6 lg:py-4 border-2 hover:bg-white hover:text-blue-950 transition-colors duration-500 cursor-pointer";
    
    const variantClasses : Record<string, string> = {
        primary: "bg-transparent text-white border-white hover:border-blue-950",
        secondary: "bg-blue-950 text-white border-blue-950 hover:border-blue-950",
    }

    const sizeClasses : Record<string, string> = {
        small: "text-xs sm:text-sm font-medium",
        medium: "text-xs md:text-sm lg:text-base font-semibold",
        large: "text-sm md:text-base lg:text-lg font-bold",
    }

    return (
        onClick ? (
            <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
                {children}
            </button>
        )
        : (
            <Link href={href} target={target} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
                {children}
            </Link>
        )
    )
}

export default Button