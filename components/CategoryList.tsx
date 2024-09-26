export default function CategoryList() {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="bg-slate-400 p-8">
          <a href="/category1">Category 1</a>
        </li>
        <li className="bg-slate-400 p-8">
          <a href="/category2">Category 2</a>
        </li>
      </ul>
    </nav>
  );
}
