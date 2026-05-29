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
  }, []);

  const postMovie = movieData.find((i) => i.id == id);

  if (!postMovie) {
    return <Loaders/>
  }

  return (
    <>
      <div>
        <Header />
        <div className="relative h-screen w-full flex items-center">
          <div className="absolute inset-0">
            <img
              src={`${TMDB_IMAGE_BASE}${postMovie.backdrop_path}`}
              className="w-full h-full object-cover"
              alt="Feature"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent" />
          </div>
          <div className="relative inset-0 z-10 w-[60%] flex flex-col items-start mt-6 gap-6 p-6">
            <div className="flex flex-col justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 bg-rose-600/20 text-rose-500 px-3 py-3 rounded-2xl w-fit text-xs font-black uppercase tracking-widest border border-rose-500/30">
                <TrendingUp size={14} /> Spotlight of the week
              </div>
              <h1 className="text-7xl text-white font-bold italic">
                {postMovie.original_title}
              </h1>
              <p className="text-2xl text-gray-300 font-medium italic">
                {postMovie.overview}
              </p>
            </div>
            <Link to={`/movie/${postMovie.id}`} className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-semibold cursor-pointer transition-all shadow-[0_10px_20px_rgba(225,29,72,0.3)] active:scale-95">
              <CircleAlert size={28} /> View Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
