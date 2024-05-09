import React, { useState, useEffect } from "react";

import CharacterCards from "@/components/CharacterCards";
import ComicCards from "@/components/ComicCards";

const Fav = () => {
  const [favorites, setFavorites] = useState([]);
  const [favoritesComics, setFavoritesComics] = useState([]);

  useEffect(() => {
    refreshFavorites();
    refreshFavoritesComics();
  }, []);

  const refreshFavorites = () => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  };

  const refreshFavoritesComics = () => {
    const storedFavoritesComics = JSON.parse(
      localStorage.getItem("favoritesComics") || "[]"
    );
    setFavoritesComics(storedFavoritesComics);
  };

  return (
    <div className="flex flex-col gap-12 my-12 md:my-24">
      <h1 className=" text-3xl md:text-4xl font-bold">Favorites Characters</h1>
      <ul className="flex flex-wrap justify-center">
        {favorites.map((character) => (
          <CharacterCards
            key={character._id}
            character={character}
            onFavoriteChange={refreshFavorites}
          />
        ))}
      </ul>
      <h1 className="text-3xl md:text-4xl font-bold">Favorites Comics</h1>
      <ul className="flex flex-wrap justify-center">
        {favoritesComics.map((comic) => (
          <ComicCards
            key={comic._id}
            comic={comic}
            onFavoriteChange={refreshFavoritesComics}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fav;
