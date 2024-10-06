'use client';

export default function LoginPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      return;
    }

    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }

  return (
    <>
      <div className="space-y-6 max-w-lg mx-auto my-10">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <label className="underline">Email</label>
          <input
            type="email"
            name="email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label className="underline">Password</label>
          <input
            type="password"
            name="password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="p-3 border border-blue-400 rounded-lg bg-blue-400 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
