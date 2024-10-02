// route search results to /search/[query]
'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).search.value.trim(); // Capture input value
    if (query) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full py-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white border-2 border-gray-600 rounded-full"
        >
          <input
            type="text"
            name="search"
            placeholder="Search for items"
            className="flex-grow p-3 text-gray-700 bg-transparent border-none rounded-full outline-none placeholder-gray-500"
          />
          <button
            className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            <Search className="w-6 h-6" />
          </button>
        </form>
      </div>
    </>
  );
}
