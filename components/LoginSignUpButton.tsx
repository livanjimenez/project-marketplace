'use client';

import { useRouter } from 'next/navigation';

export default function LoginSignUpButton() {
  const router = useRouter();

  function handleLogin() {
    router.push('/login');
  }

  return (
    <>
      <button
        className="bg-blue-500 px-4 my-4 rounded-lg text-white hover:text-black "
        onClick={handleLogin}
      >
        Sign in
      </button>
    </>
  );
}
