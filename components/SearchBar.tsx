// route search results to /search/[query]
'use client';

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('searching...');

    // pass input value to search page

    router.push(`/search/${e.currentTarget}`);
  };

  return (
    <>
      <div className="border border-slate-500 rounded-3xl p-2">
        <form onSubmit={handleSubmit}>
          <input type="text" className="" />
          <button
            className="bg-blue-500 text-white rounded-full p-2"
            type="submit"
          >
            <Search />
          </button>
        </form>
      </div>
    </>
  );
}
