const categories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' },
  { id: 4, name: 'Category 4' },
  { id: 5, name: 'Category 5' },
];

export default function CategoryList() {
  return (
    <nav className="border-b-2 border-gray-500">
      <ul className="flex flex-row justify-between mx-4">
        {categories.map((category) => (
          <li key={category.id} className="mr-4">
            <a href={`/category/${category.id}`}>{category.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
