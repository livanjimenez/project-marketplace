import DropdownButton from './DropdownButton';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
  },
  {
    id: 2,
    name: 'Category 2',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
  },
  {
    id: 3,
    name: 'Category 3',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
  },
  {
    id: 4,
    name: 'Category 4',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
  },
  {
    id: 5,
    name: 'Category 5',
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
  },
];

export default function CategoryList() {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-4 mx-4">
        {categories.map((category) => (
          <li key={category.id}>
            <DropdownButton
              name={category.name}
              categories={category.subcategories}
            />
          </li>
        ))}
      </ul>
      <div className="mt-4 border-b border-gray-300"></div>
    </nav>
  );
}
