'use client';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    location: 'Miami, FL',
    image: 'https://via.placeholder.com/250',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    location: 'Los Angeles, CA',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    location: 'New York, NY',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    location: 'Chicago, IL',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    location: 'Houston, TX',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
    location: 'Philadelphia, PA',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Product 7',
    price: 700,
    location: 'Phoenix, AZ',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Product 8',
    price: 800,
    location: 'San Antonio, TX',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Product 9',
    price: 900,
    location: 'San Diego, CA',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Product 10',
    price: 1000,
    location: 'Dallas, TX',
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed...
];

import { useRouter } from 'next/navigation';

export default function ProductList() {
  const router = useRouter();

  // TODO: need to fix this
  function handleClick() {
    products.map((product, index) => {
      router.push(`/product/${product.id}`);
    });
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
      {products.map((product) => (
        <div key={product.id} className="p-4">
          <button
            className="w-full hover:shadow-md hover:rounded-lg text-left"
            onClick={handleClick}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-t-lg mb-4"
            />
            <div className="p-2">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600 font-semibold">${product.price}</p>
              <p className="text-gray-600">{product.location}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
