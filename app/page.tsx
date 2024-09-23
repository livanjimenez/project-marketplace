// categories will be fetched from the server
// the server gets the categories from the database
// categories will be routing to the respective category page
// next.js can use a /[category] route to route to the category page

import { categories } from '@/lib/categories';
import Link from 'next/link';

// rewrite the categories object to be typed
type CategoriesType = {
  [key: string]: string[];
};

const typedCategories: CategoriesType = categories;

// convert categories to a drop down menu for mobile responsiveness
// show the categories in a grid for desktop responsiveness

export default function HomePage() {
  return (
    <>
      <div className="flex flex-row justify-center my-4 gap-8">
        <h1 className="text-lg">☮️ Craigslist</h1>
        <div>
          <input type="text" placeholder="Search" className="mr-2" />
          <button className="bg-slate-500 rounded-md text-white px-2">
            Search
          </button>
          <button className="bg-slate-400 rounded-md px-2 text-sm ml-2">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>
              Post
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4">
        {Object.keys(typedCategories).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {typedCategories[category].map((subCategory) => (
                <li
                  key={subCategory}
                  className="hover:bg-slate-400 hover:text-white rounded-sm"
                >
                  <Link href={`/${category}/${subCategory}`}>
                    {subCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
