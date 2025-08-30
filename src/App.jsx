import { useEffect, useState } from "react";
import { fetchProfiles } from "./api/profiles";
import Card from "./components/Card";
import SearchBar from "./components/Search";
import SortDropdown from "./components/Sort";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");

  const filtered = profiles.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  const sorted = [...filtered].sort((x, y) => {
    if (sortBy === "age-asc") return x.age - y.age;
    if (sortBy === "age-desc") return y.age - x.age;
    if (sortBy === "name") return x.name.localeCompare(y.name);
    return 0;
  });

  const visibleProfiles = sorted.slice(0, visibleCount);

  useEffect(() => {
    fetchProfiles(100, 1).then(setProfiles);
  }, []);

  return (
    <div className="bg-gray-50">
      <div>
        <SearchBar query={query} setQuery={setQuery} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy}></SortDropdown>
      </div>

      <div className="max-w-7xl h-8xl  mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch ">
        {visibleProfiles.map((i) => (
          <Card
            key={i.id}
            image={i.image}
            name={i.name}
            age={i.age}
            city={i.city}
            country={i.country}
            bio={i.bio}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center pb-4">
        <p className="text-sm text-gray-500 mt-4 text-center">
          Currently showing {visibleProfiles.length} / {profiles.length}{" "}
          profiles
        </p>

        {visibleCount < profiles.length && (
          <button
            onClick={() => setVisibleCount((c) => c + 20)}
            className="mt-6 px-4 py-2 bg-cyan-900 text-white rounded-md hover:bg-cyan-800"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
