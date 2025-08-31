export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search for profile ... "
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="px-3 py-2 bg-white border border-gray-300 text-base
                 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-800 rounded-md w-full sm:w-1/3"
    ></input>
  );
}
