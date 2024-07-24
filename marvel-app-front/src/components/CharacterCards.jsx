import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CharacterCards = ({ character, onFavoriteChange }) => {
  // État pour vérifier si le personnage est dans les favoris
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    // Vérifie si le personnage est dans les favoris au montage du composant
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorited(favorites.some((fav) => fav._id === character._id));
  }, [character._id]);

  const handleFavorite = () => {
    // Gère l'ajout ou la suppression des favoris
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorited) {
      // Si déjà favori, le retire des favoris
      const newFavorites = favorites.filter((fav) => fav._id !== character._id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorited(false);
    } else {
      // Sinon, ajoute aux favoris
      const newFavorites = [...favorites, character];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorited(true);
    }
    // Appelle le callback pour mettre à jour les favoris dans le composant parent
    onFavoriteChange();
  };

  return (
    <li className="card md:w-96 m-2 bg-base-100 shadow-xl">
      <Link to={`/comics/${character._id}`}>
        <figure className="px-10 pt-10">
          <img
            className="rounded-xl w-auto h-[225px]"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </figure>
        <div className="card-body items-center text-center py-6">
          <h2 className="card-title">
            {character.name}
            {character.title ? ` - ${character.title}` : ""}
          </h2>
        </div>
      </Link>
      <div className="card-actions items-center justify-center pb-8">
        <button
          className={`btn ${
            isFavorited ? "bg-green-500" : "bg-red-500"
          } text-white`}
          onClick={handleFavorite}
        >
          {isFavorited ? "Remove from list" : "Add to list"}
        </button>
      </div>
    </li>
  );
};

export default CharacterCards;
