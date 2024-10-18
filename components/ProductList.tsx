'use client';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      const url = 'http://localhost:8080/listings';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setListings(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="flex flex-col justify-center p-4 bg-white rounded-lg shadow-md"
        >
          <img
            className="w-48 h-48 rounded-sm"
            src="https://via.placeholder.com/150"
            alt={listing.title}
          />
          <h2 className="mt-4 text-xl font-bold">{listing.title}</h2>
          <p className="mt-2 text-sm text-gray-600">{listing.description}</p>
          <p className="mt-2 text-sm text-gray-800 font-semibold">
            ${listing.price}
          </p>
          <button
            onClick={() => console.log('View button clicked')}
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
}
