import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center w-full my-12 md:my-24">
      <div className="form-control md:w-2/4 w-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
