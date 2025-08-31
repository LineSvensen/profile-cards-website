import Select from "react-select";

const options = [
  { value: "name", label: "Name A–Z" },
  { value: "age-asc", label: "Age Low → High" },
  { value: "age-desc", label: "Age High → Low" },
];

export default function SortDropdown({ sortBy, setSortBy }) {
  const selectedOption = options.find((opt) => opt.value === sortBy);

  return (
    <div className="w-48">
      <Select
        value={selectedOption}
        onChange={(opt) => setSortBy(opt?.value || "none")}
        options={options}
        isSearchable={false}
        placeholder="Sort by"
        classNamePrefix="react-select"
        styles={{
          control: (base, state) => ({
            ...base,
            fontSize: "1rem",
            borderRadius: "0.375rem",
            minHeight: "42px",
            borderColor: state.isFocused ? "#115e59" : "#d1d5db",
            cursor: "pointer",
            boxShadow: state.isFocused ? "0 0 0 2px #14B8A6" : "none",
            "&:hover": { borderColor: "#14B8A6" },
          }),
          placeholder: (base) => ({
            ...base,
            color: "#1f2937",
          }),
          option: (base, state) => ({
            ...base,
            fontSize: "0.875rem",
            margin: 0,
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: 0,
            backgroundColor: state.isSelected
              ? "#115e59"
              : state.isFocused
              ? "#b9ebe1"
              : "white",
            color: state.isSelected ? "white" : "#374151",
          }),
          menu: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
            borderRadius: "0.375rem",
          }),
          menuList: (base) => ({
            ...base,
            padding: 0,
          }),
        }}
      />
    </div>
  );
}
