import { Film, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Header() {

  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  const api_key = import.meta.env.VITE_MOVIE_API_KEY
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        api_key
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <>
      <div className="absolute z-10 w-full">
        <div className="bg-transparent text-white flex flex-row justify-between p-4">
          <div className="flex flex-row gap-3 p-2">
            <div className="bg-red-600 border-red-600 p-2 rounded-xl h-12">
              <Film size={32} />
            </div>
            <Link
              to={"/"}
              className="text-4xl font-semibold italic cursor-pointer"
            >
              CINESTREAM
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex flex-row gap-2 items-center border-3 font-bold border-gray-400 p-3 rounded-2xl">
                <Search size={22} />
                <input
                  onChange={(e) =>
                  setQuery(e.target.value) 
                  }
                  className="text-white"
                  type="text"
                  placeholder="Enter Movie name"
                />
              </div>
            <div className="w-10 h-10 rounded-full border-2 border-red-600/50 p-0.5">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                className="rounded-full font-bold bg-zinc-800"
                alt="User"
              />
            </div>
            </div>
              <div className={`bg-white shadow-lg max-h-96 w-full rounded-xl overflow-y-auto ${results.length == 0?"hidden":"block"} `}>
                {results.map((movie) => (
                  <Link
                    to={`/movie/sreach/${movie.id}`}
                    key={movie.id}
                    className="flex gap-3 p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    <img
                      src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                      className="w-15"
                    />
                    <p className="text-base text-black w-55">{movie.title}</p>
                  </Link>
                ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
