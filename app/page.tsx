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
      <header className="flex items-center justify-center px-24 py-8 gap-8">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/">
            <h1 className="font-mono text-3xl font-semibold mb-2">Zeze</h1>
          </Link>
          <SearchBar />
        </div>

        <div className="flex items-center space-x-6">
          {/* <LocationButton /> */}
          <DropdownButton
            name="About"
            categories={['About', 'Terms of Service', 'Privacy']}
          />
          <PostButton />
          <LoginSignUpButton />
        </div>
      </header>

      <CategoryList />

      <main className="py-8">
        <ProductList />
      </main>
    </>
  );
}
