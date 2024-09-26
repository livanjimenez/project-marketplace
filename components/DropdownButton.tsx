'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// will add props later
// array of links
// will swap to dropdownbtn component
export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <button onClick={handleClick} className="flex items-center">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
          <span className="ml-2">About</span>
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-48 flex flex-col bg-white shadow-lg z-10">
            <li>
              <a href="/about" className="block px-4 py-2">
                About
              </a>
            </li>
            <li>
              <a href="/tos" className="block px-4 py-2">
                Term of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="block px-4 py-2">
                Privacy
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
