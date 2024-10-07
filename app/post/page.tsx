'use client';

import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import DropdownButton from '@/components/DropdownButton';
import PostButton from '@/components/PostButton';
import LoginSignUpButton from '@/components/LoginSignUpButton';

export default function PostPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const product = {
      name: formData.get('name') as string,
      price: formData.get('price') as string,
      location: formData.get('location') as string,
      description: formData.get('description') as string,
      images: formData.getAll('images') as unknown,
    };
    console.log(product);
  }

  return (
    <>
      <header className="flex items-center justify-center px-24 py-2 gap-8">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/">
            <h1 className="font-mono text-3xl font-semibold mb-2">Zeze</h1>
          </Link>
          <SearchBar />
        </div>

        <div className="flex items-center space-x-6">
          {/* <LocationButton /> */}
          <DropdownButton
            name="About"
            categories={['About', 'Terms of Service', 'Privacy']}
          />
          <PostButton />
          <LoginSignUpButton />
        </div>
      </header>
      <div className="my-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-lg mx-auto p-6"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="price"
              placeholder="Product price"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="location"
              placeholder="Zip code"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600">Attach images</label>
            <input
              type="file"
              name="images"
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}
