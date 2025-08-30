export default function SortDropdown({ sortBy, setSortBy }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-3 py-2 border rounded-md"
    >
      <option value="none">No sort</option>
      <option value="name">Name A-Z</option>
      <option value="age-asc">Age Low to High</option>
      <option value="age-desc">Age High to Low</option>
    </select>
  );
}
