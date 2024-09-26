import DropdownButton from '@/components/DropdownButton';
import LocationButton from '@/components/LocationButton';
import LoginSignUpButton from '@/components/LoginSignUpButton';
import PostButton from '@/components/PostButton';
import SearchBar from '@/components/SearchBar';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';

export default function HomePage() {
  return (
    <>
      <header className="flex flex-row gap-8">
        <h1>Title</h1>
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
