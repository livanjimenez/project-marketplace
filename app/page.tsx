import DropdownButton from '@/components/DropdownButton';
import LocationButton from '@/components/LocationButton';
import LoginSignUpButton from '@/components/LoginSignUpButton';
import PostButton from '@/components/PostButton';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="flex flex-row justify-between gap-8 p-8">
        <Link href="/">
          <h1>Title</h1>
        </Link>
        <SearchBar />
        <LocationButton />
        <DropdownButton />
        <PostButton />
        <LoginSignUpButton />
      </header>
      <CategoryList />
      <main>
        <ProductList />
      </main>
    </>
  );
}
