'use client';

export default function PostPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    return fetch('http://localhost:8080/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className="my-10">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-lg mx-auto p-6"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}
