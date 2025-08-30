export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for profile ... "
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="px-3 py-2 border rounded-md w-full sm:w-1/3"
    ></input>
  );
}
