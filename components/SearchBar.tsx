// SearchBar component with autocomplete
export default function SearchBar() {
  return (
    <>
      <div className="border border-slate-500 rounded-sm">
        <form>
          <input type="text" />
          <button className="bg-blue-500 text-white" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
