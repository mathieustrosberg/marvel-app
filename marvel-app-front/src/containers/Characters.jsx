import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "@/components/SearchBar";
import CharacterCards from "@/components/CharacterCards";
import Pagination from "@/components/Pagination";

const Characters = () => {
  const [data, setData] = useState({ results: [], total: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const offset = (currentPage - 1) * itemsPerPage;
      try {
        const response = await axios.get(
          `/characters?limit=${itemsPerPage}&skip=${offset}&name=${search}`
        );
        setData({ results: response.data.results, total: response.data.total });
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data, please try again.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setIsLoading(true);
  };

  // console.log(data.results);
  return isLoading ? (
    <div className="flex justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : error ? (
    <div className="text-red-500 text-center">{error}</div>
  ) : (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex flex-wrap justify-center">
        {data.results
          .filter((character) =>
            search === ""
              ? true
              : character.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((character) => (
            <CharacterCards
              key={character.id || character.name}
              character={character}
            />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Characters;
