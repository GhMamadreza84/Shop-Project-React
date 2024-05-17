import { ImSearch } from "react-icons/im";

const SearchBox = () => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;
