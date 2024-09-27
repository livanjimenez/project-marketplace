import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function PostButton() {
  return (
    <>
      <Link href="/post">
        <button className="hover:underline">Post an item</button>
      </Link>
    </>
  );
}
