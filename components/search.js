export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search"
      className="search"
      style={{
        width: "90%",
        margin: "15px 15px 0",
        background: "var(--color-secondary-dark)",
      }}
    />
  );
}
