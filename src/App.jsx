import { useEffect, useState } from "react";
import { fetchProfiles } from "./api/profiles";
import Card from "./components/Card";
import SearchBar from "./components/Search";
// import SortDropdown from "./components/Sort";
import SortDropdown from "./components/Sort";
import Fuse from "fuse.js";
// import Select from "react-select";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");

  // const filtered = profiles.filter((i) =>
  //   i.name.toLowerCase().includes(query.toLowerCase())
  // );

  useEffect(() => {
    fetchProfiles(100, 1).then(setProfiles);
  }, []);

  const fuse = new Fuse(profiles, {
    keys: ["name", "city", "country", "age"],
    threshold: 0.3,
  });

  const results = query ? fuse.search(query).map((res) => res.item) : profiles;

  const sorted = [...results].sort((x, y) => {
    if (sortBy === "age-asc") return x.age - y.age;
    if (sortBy === "age-desc") return y.age - x.age;
    if (sortBy === "name") return x.name.localeCompare(y.name);
    return 0;
  });

  const visibleProfiles = sorted.slice(0, visibleCount);

  return (
    <div className="bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-7xl p-6">
        <h1 className="text-3xl font-semibold mt-4 mb-8 text-left">
          Profiles overview
        </h1>

        <div className="flex flex-row justify-between gap-2 items-center">
          <SearchBar query={query} setQuery={setQuery} />
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      <div className="max-w-7xl h-8xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
        {visibleProfiles.length > 0 ? (
          visibleProfiles.map((i) => (
            <Card
              key={i.id}
              image={i.image}
              name={i.name}
              age={i.age}
              city={i.city}
              country={i.country}
              bio={i.bio}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found :-/
          </p>
        )}
      </div>
      {results.length > 0 && (
        <div className="flex flex-col justify-center items-center pb-4">
          <p className="text-sm text-gray-500 mt-4 text-center">
            Currently showing {visibleProfiles.length} / {results.length}{" "}
            profiles
          </p>

          {visibleCount < results.length && (
            <button
              onClick={() => setVisibleCount((c) => c + 20)}
              className="mt-6 px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 cursor-pointer"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
