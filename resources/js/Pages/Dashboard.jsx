import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';

export default function Dashboard({ blogs }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = Number(urlParams.get('page'));
    if (pageParam) {
      setCurrentPage(pageParam);
    }
  }, []);

  const filteredBlogs = blogs?.data?.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      window.location.href = `http://127.0.0.1:8000/dashboard?page=${currentPage - 1}`;
    }
  };

  const handleNextPage = () => {
    window.location.href = `http://127.0.0.1:8000/dashboard?page=${currentPage + 1}`;
  };

  return (
    <div className='flex flex-col gap-5 my-10'>
      <input
        type='text'
        placeholder='Search reminders...'
        className='rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredBlogs?.map((blog) => (
        <BlogCard key={blog?.id} blog={blog} />
      ))}
      <div className='flex justify-between text-black rounded-md bg-stone-100 p-2'>
        <button onClick={handlePrevPage}>Previous Page</button>
        <p>Page {currentPage}</p>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}
