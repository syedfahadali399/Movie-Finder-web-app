import { CircleAlert, Loader, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loaders from "./Loaders";
import Header from "./Header";

function LandingPage() {
  
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  const api_key = import.meta.env.VITE_MOVIE_API_KEY
  const [movieData, setMovieData] = useState([]);
  const id = 78;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        api_key
      },
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?query=blade%20runner&include_adult=false&language=en-US&page=1",
      options,
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results))
      .catch((err) => console.error(err));
  }, [api_key]);

  const postMovie = movieData.find((i) => i.id == id);

  if (!postMovie) {
    return <Loaders/>
  }

  return (
    <>
      <div>
        <Header />
        <div className="relative min-h-screen lg:h-screen w-full flex items-center py-24 sm:py-28 md:py-32 lg:py-0">
          <div className="absolute inset-0">
            <img
              src={`${TMDB_IMAGE_BASE}${postMovie.backdrop_path}`}
              className="w-full h-full object-cover"
              alt="Feature"
            />
            <div className="absolute inset-0 bg-[#0a0a0b]/85 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0a0a0b] lg:via-[#0a0a0b]/75 lg:to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 w-full md:w-[85%] lg:w-[70%] xl:w-[60%] flex flex-col items-start mt-16 md:mt-24 lg:mt-6 gap-4 sm:gap-6 p-4 sm:p-8 md:p-12">
            <div className="flex flex-col justify-center gap-4 sm:gap-6 mt-6">
              <div className="flex items-center gap-2 bg-rose-600/20 text-rose-500 px-3 py-2 sm:py-3 rounded-2xl w-fit text-[10px] sm:text-xs font-black uppercase tracking-widest border border-rose-500/30">
                <TrendingUp size={14} className="shrink-0" /> Spotlight of the week
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold italic leading-tight uppercase tracking-tight">
                {postMovie.original_title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium italic leading-relaxed line-clamp-4 md:line-clamp-none max-w-2xl">
                {postMovie.overview}
              </p>
            </div>
            <Link to={`/movie/${postMovie.id}`} className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold cursor-pointer transition-all shadow-[0_10px_20px_rgba(225,29,72,0.3)] active:scale-95 text-sm sm:text-base">
              <CircleAlert size={20} className="sm:w-7 sm:h-7" /> View Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
