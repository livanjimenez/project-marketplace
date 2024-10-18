import Link from 'next/link';
import SearchBar from './SearchBar';
import LocationButton from './LocationButton';
import DropdownButton from './DropdownButton';
import PostButton from './PostButton';
import LoginSignUpButton from './LoginSignUpButton';

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-center px-24 py-8 gap-8">
        <div className="flex items-center justify-center space-x-2">
          <Link href="/">
            <h1 className="font-mono uppercase text-3xl font-bold my-2 text-sky-500 mr-2">
              lowco
            </h1>
          </Link>
          <SearchBar />
        </div>

        <div className="flex items-center space-x-6">
          <LocationButton />
          <DropdownButton
            name="About"
            categories={['About', 'Terms of Service', 'Privacy']}
          />
          <PostButton />
          <LoginSignUpButton />
        </div>
      </header>
    </>
  );
}
