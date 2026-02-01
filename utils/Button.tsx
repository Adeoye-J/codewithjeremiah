import React from 'react'

const Button = ({ variant = "primary", size = "medium", children, className = "", onClick, ...props } : { variant?: string, size?: string, children: React.ReactNode, className?: string, onClick?: () => void }) => {
  
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
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button