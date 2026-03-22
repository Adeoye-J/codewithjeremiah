"use client"

import { Blog } from '@/types/blog'
import BlogItem from './BlogItem'
import FilterItems from '../general/FilterItems'
import { useState } from 'react'
import { categories, tags } from '@/data/blogFilters'
import Link from 'next/link'

const BlogList = ({ blogs, filter }: { blogs: Blog[], filter: Boolean }) => {
    const [category, setCategory] = useState("")
    const [tag, setTag] = useState("")
    const [search, setSearch] = useState("")
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs)

    const filterItems = () => {
        const filtered = blogs.filter((blog) => {
            const matchesCategory = category ? String(blog.category).toLowerCase() === category.toLowerCase() : true;
            const matchesTag = tag
                ? String(blog.tags).toLowerCase().includes(tag.toLowerCase())
                : true;
            const matchesSearch = search                
                ? blog.title.toLowerCase().includes(search.toLowerCase()) ||
                  blog.excerpt.toLowerCase().includes(search.toLowerCase())
                : true;
            return matchesTag && matchesCategory && matchesSearch;
        });
        setFilteredBlogs(filtered);
    };

    return (
        <div className="w-full">
            {
                filter &&
                <FilterItems filterItems={filterItems} firstFilter={category} setFirstFilter={setCategory} secondFilter={tag} setSecondFilter={setTag} search={search} setSearch={setSearch} firstFilters={categories} secondFilters={tags} />
            }
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => {
                    const navRoute = blog.title?.toLowerCase().replace(/\s+/g, '-');

                    return (
                        <Link href={`/blogs/${navRoute}`} className="block" key={blog.id}>
                            <BlogItem blog={blog} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default BlogList