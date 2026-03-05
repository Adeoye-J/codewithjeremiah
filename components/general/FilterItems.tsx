"use client";

import { Space_Grotesk } from "next/font/google";
import { useEffect } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

const FilterItems = (
    {firstFilter, secondFilter, search, setSearch, setFirstFilter, setSecondFilter, filterItems, firstFilters, secondFilters} : 
    { firstFilter: string, secondFilter: string, search: string, setSearch: (search: string) => void, setFirstFilter: (type: string) => void, setSecondFilter: (stack: string) => void, filterItems: () => void, firstFilters: Record<string, string>[], secondFilters: Record<string, string>[] }) => {

    useEffect(() => {
        filterItems();
    }, [firstFilter, secondFilter, search])

    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Items..."
                    className={`${spaceGrotesk.className} w-full md:w-80 rounded-lg border px-4 py-2`}
                />

                <div className="flex gap-3">
                    <select className={`${spaceGrotesk.className} rounded-lg border px-3 py-2 dark:bg-black bg-gray-100 dark:text-white text-black`} value={firstFilter} onChange={(e) => { setFirstFilter(e.target.value) }}>
                        {
                            firstFilters.map((item, index) => (
                                <option value={item.value} key={index}>{item.name}</option>
                            ))
                        }
                    </select>

                    <select className={`${spaceGrotesk.className} rounded-lg border px-3 py-2 dark:bg-black bg-gray-100 dark:text-white text-black`} value={secondFilter} onChange={(e) => setSecondFilter(e.target.value)} >
                        {
                            secondFilters.map((item, index) => (
                                <option value={item.value} key={index}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    );
}

export default FilterItems;
