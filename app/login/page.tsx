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
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
