import Link from 'next/link';

export default function PostButton() {
  return (
    <>
      <Link href="/post">
        <button className="hover:underline">Post an item</button>
      </Link>
    </>
  );
}
