import { useEffect, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

function Section() {

  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  const api_key = import.meta.env.VITE_MOVIE_API_KEY
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [range, setRange] = useState(8);
  
  let value = 4
  
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
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options,
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data.results))
      .catch((err) => console.error(err));
  }, []);
    
  const updater = () => {
    if(range < 20) {
      setRange(prev => prev + value)
    } else {
      setRange(20);
    }
  }

  const reducer = () => {
    if(range <= 20 && range > 8) {
      setRange(prev => prev - value)
    } else {
      setRange(8);
    }
  }

  return (
    <>
       <div className="w-full h-full p-6 mt-8">
        <div className="flex flex-row gap-3 items-center">
            <div className="border-3 border-red-600 px-0.5 py-5 rounded-2xl bg-red-500"></div>
            <h1 className="text-5xl text-white font-bold uppercase italic">Trending Now</h1>
        </div>
        <div className="grid grid-cols-4 items-center gap-8 mb-8 mt-14">
            {movieData.map((value, index) => {
                return index < range? (
                    <div key={index} className="flex flex-col gap-4 justify-center items-start">
                        <Link to={`/movie/${value.id}`} className="relative">
                            <img className="object-center aspect-4\3 rounded-3xl hover:scale-110 transition-all hover:border-2 hover:border-red-700 hover:cursor-pointer" src={`${TMDB_IMAGE_BASE}${value.backdrop_path}`} />
                            <div className="absolute top-3 left-62 z-10 p-2 border-2 border-black bg-black rounded-2xl">
                              <div className="flex flex-row gap-2 items-center">
                                <Star fill="currentColor" className="border-2 border-yellow-300 bg-yellow-300" size={20}/>
                                <div className="text-white font-bold">{value.vote_average.toFixed(2)}</div>
                              </div>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-4 items-start">
                            <h1 className="text-white font-bold text-xl">{value.original_title}</h1>
                            <p className="text-white">{value.release_date}</p>
                        </div>
                    </div>
                ): null
                
            })}
        </div>
        <div className="flex flex-row gap-5 items-center justify-center mt-8">
          {range < 20 && <button onClick={updater} className="text-white border-white border-2 font-semibold uppercase italic text-xl rounded-2xl p-4 m-2 cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all" >Show more</button>}
          {range > 8 && <button onClick={reducer} className="text-white border-white border-2 font-semibold uppercase italic text-xl rounded-2xl p-4 m-2 cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all" >Show less</button>}
        </div>
       </div>
    </>
  ) 
}

export default Section;
