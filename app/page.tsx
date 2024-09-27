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
      <header className="flex">
        <div className="flex">
          <Link href="/">
            <h1 className="text-3xl">MerchHub</h1>
          </Link>
          <SearchBar />
        </div>
        <LocationButton />
        <DropdownButton
          name="About"
          categories={['About', 'Terms of Service', 'Privacy']}
        />
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
