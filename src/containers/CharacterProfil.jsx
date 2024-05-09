import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

const CharacterProfil = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`comics/${characterId}`);
        // console.log(response);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [characterId]);

  return (
    <div className="py-16 md:py-24">
      {isLoading ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <div className="text-center py-12">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">{data.name}</h1>
                <p className="py-6">{data.description}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-auto">
            {data.comics.map((comic, index) => (
              <Link
                to={`/comics/comic/${comic._id}`}
                key={comic._id}
                className="no-underline"
              >
                <li className="card md:w-96 m-2 bg-base-100 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img
                      className="rounded-xl w-auto h-[225px]"
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt={comic.name || comic.title}
                      role="img"
                    />
                  </figure>
                  <div className="card-body items-center text-center py-6">
                    <h2 className="card-title">{comic.name || comic.title}</h2>
                  </div>
                </li>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterProfil;
