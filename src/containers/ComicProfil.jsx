import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComicProfil = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/comics/comic/${comicId}`);
        console.log(response.data);
        setComic(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [comicId]);

  return (
    <div className="py-16 md:py-24">
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="text-center md:py-12">
            <img
              className="rounded-xl w-auto h-[225px] my-12 mx-auto"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              role="img"
            />
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold">{comic.title}</h1>
              <p className="py-6">{comic.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComicProfil;
