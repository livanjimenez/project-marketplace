import DropdownButton from '@/components/DropdownButton';
import LocationButton from '@/components/LocationButton';
import LoginSignUpButton from '@/components/LoginSignUpButton';
import PostButton from '@/components/PostButton';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import Link from 'next/link';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />

      <CategoryList />

      <main className="py-8">
        <ProductList />
      </main>
    </>
  );
}
