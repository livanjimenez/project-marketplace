'use client';
export default function PostPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product name" />
        <input type="text" placeholder="Product price" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Description" />
        <label>Attach images</label>
        <input type="file" />
        <button type="submit">Post</button>
      </form>
    </>
  );
}
