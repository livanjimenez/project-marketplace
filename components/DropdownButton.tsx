'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function dropDownMenu({
  categories,
  isOpen,
  setIsOpen,
}: {
  categories: string[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 flex flex-col bg-white shadow-lg z-10">
          {categories.map((category) => (
            <li key={category}>
              <a href={`/category/${category}`} className="block px-4 py-2">
                {category}
              </a>
            </li>
          ))}
        </ul>
      )}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
        />
      )}
    </>
  );
}

export default function DropdownButton({
  categories,
  name,
}: {
  categories: string[];
  name: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="relative">
        <button onClick={handleClick} className="flex items-center">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
          <span className="ml-2">{name}</span>
        </button>

        {dropDownMenu({ categories, isOpen, setIsOpen })}
      </div>
    </>
  );
}
