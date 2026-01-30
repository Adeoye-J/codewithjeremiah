import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-4 px-6 bg-gray-800 text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Code With Jeremiah. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer