
import Breadcrumb from '@/components/general/BreadCrumb'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <Breadcrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "Error 404" }
                ]}
            />
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="mt-4 text-gray-500">
                    Oops! The page you’re looking for doesn’t exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 px-6 py-2 rounded bg-black text-white"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound