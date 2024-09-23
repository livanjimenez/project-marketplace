import { categories } from '@/lib/categories';
import Link from 'next/link';

// rewrite the categories object to be typed
type CategoriesType = {
  [key: string]: string[];
};

const typedCategories: CategoriesType = categories;

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center my-4 gap-8">
        <div className="flex flex-row gap-8">
          <h1>☮️ Craigslist</h1>
          <form>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-4">
        {Object.keys(typedCategories).map((category) => (
          <div key={category}>
            <div className="border-b-4 border-sky-500">
              <h2>{category}</h2>
            </div>

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
