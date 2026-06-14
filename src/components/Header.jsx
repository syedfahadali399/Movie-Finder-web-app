import { Film, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Header() {

  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  const api_key = import.meta.env.VITE_MOVIE_API_KEY
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

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
  }, [query, api_key]);

  return (
    <>
      <div className="absolute z-25 w-full">
        <div className="bg-transparent text-white flex flex-col sm:flex-row gap-4 justify-between items-center p-4 md:p-6 w-full">
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-red-600 border-red-600 p-2 rounded-xl h-10 sm:h-12 flex items-center justify-center">
              <Film size={24} className="sm:w-8 sm:h-8" />
            </div>
            <Link
              to={"/"}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold italic cursor-pointer tracking-wider"
            >
              CINESTREAM
            </Link>
          </div>
          <div className="relative flex flex-col gap-2 w-full sm:w-auto">
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex flex-row gap-2 items-center border-2 sm:border-3 font-bold border-gray-400 p-2 sm:p-3 rounded-2xl flex-1 sm:flex-none w-full sm:w-64 md:w-80">
                <Search size={20} className="text-gray-400 shrink-0" />
                <input
                  onChange={(e) =>
                  setQuery(e.target.value) 
                  }
                  className="text-white bg-transparent outline-none w-full text-sm sm:text-base placeholder-gray-400"
                  type="text"
                  placeholder="Enter Movie name"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-red-600/50 p-0.5 shrink-0">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  className="rounded-full font-bold bg-zinc-800"
                  alt="User"
                />
              </div>
            </div>
            <div className={`absolute top-full left-0 right-14 sm:right-0 sm:left-auto sm:w-80 bg-white shadow-2xl max-h-96 rounded-xl overflow-y-auto mt-2 z-30 transition-all border border-gray-100 ${results.length === 0 ? "hidden" : "block"}`}>
              {results.map((movie) => (
                <Link
                  to={`/movie/sreach/${movie.id}`}
                  key={movie.id}
                  className="flex gap-3 p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                >
                  <img
                    src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                    className="w-12 h-16 object-cover rounded-lg shrink-0"
                    alt=""
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-black leading-tight line-clamp-2">{movie.title}</p>
                    {movie.release_date && (
                      <p className="text-xs text-gray-500 mt-1">{movie.release_date.split("-")[0]}</p>
                    )}
                  </div>
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
