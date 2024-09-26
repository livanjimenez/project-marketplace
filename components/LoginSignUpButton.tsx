'use client';

import { useRouter } from 'next/navigation';

export default function LoginSignUpButton() {
  const router = useRouter();

  function handleLogin() {
    router.push('/login');
  }

  return (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
