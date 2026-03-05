"use client"

import { Blog } from '@/types/blog'
import BlogItem from './BlogItem'
import FilterItems from '../general/FilterItems'
import { useState } from 'react'
import { categories, tags } from '@/data/blogFilters'

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
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
            <FilterItems filterItems={filterItems} firstFilter={category} setFirstFilter={setCategory} secondFilter={tag} setSecondFilter={setTag} search={search} setSearch={setSearch} firstFilters={categories} secondFilters={tags} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default BlogList