import React from 'react'

const Button = ({ variant = "primary", size = "medium", children, className = "", ...props } : { variant?: string, size?: string, children: React.ReactNode, className?: string }) => {
  
    const baseClasses = "px-6 py-4 border-2 border-white hover:bg-white hover:text-blue-800 transition-colors duration-500 cursor-pointer";
    
    const variantClasses : Record<string, string> = {
        primary: "bg-transparent text-white",
        // secondary: "bg-transparent",
    }

    const sizeClasses : Record<string, string> = {
        small: "text-sm",
        medium: "text-base font-semibold",
        large: "text-lg",
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button