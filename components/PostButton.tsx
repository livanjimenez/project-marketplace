import Link from 'next/link';

export default function PostButton() {
  return (
    <>
      <Link href="/post">
        <button>Make a Post</button>
      </Link>
    </>
  );
}
