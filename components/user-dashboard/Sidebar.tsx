
import React from 'react'

const Sidebar = () => {

    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-xl font-bold mb-4">Projects Sidebar</h2>
            <ul className="space-y-2">
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Project 1</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Project 2</li>
                <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Project 3</li>
            </ul>
        </div>
    )
}

export default Sidebar
