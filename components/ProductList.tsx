const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed...
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-slate-100 p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-t-lg mb-4"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
