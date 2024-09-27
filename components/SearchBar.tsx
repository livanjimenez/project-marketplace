// route search results to /search/[query]
'use client';

import { useRouter } from 'next/navigation';

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
      <div className="border border-slate-500 rounded-sm">
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button className="bg-blue-500 text-white" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
