import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

function Section() {

  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  const api_key = import.meta.env.VITE_MOVIE_API_KEY
  const [movieData, setMovieData] = useState([]);
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
  }, [api_key]);
    
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
       <div className="w-full h-full p-4 sm:p-6 md:p-8 mt-4 sm:mt-8">
        <div className="flex flex-row gap-3 items-center">
            <div className="border-3 border-red-600 px-0.5 py-4 sm:py-5 rounded-2xl bg-red-500"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold uppercase italic">Trending Now</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 mt-8 sm:mt-14">
            {movieData.map((value, index) => {
                return index < range? (
                    <div key={index} className="flex flex-col gap-3 justify-center items-start">
                        <Link to={`/movie/${value.id}`} className="relative block w-full overflow-hidden rounded-3xl group">
                            <img className="w-full object-cover object-center aspect-4\3 rounded-3xl hover:scale-105 transition-all hover:border-2 hover:border-red-700 hover:cursor-pointer" src={`${TMDB_IMAGE_BASE}${value.backdrop_path}`} />
                            <div className="absolute top-3 right-3 z-10 p-1.5 sm:p-2 border-2 border-black bg-black rounded-2xl">
                              <div className="flex flex-row gap-1.5 sm:gap-2 items-center">
                                <Star fill="currentColor" className="border border-yellow-300 bg-yellow-300 text-yellow-300 w-4 h-4 sm:w-5 sm:h-5" size={20}/>
                                <div className="text-white text-xs sm:text-sm font-bold">{value.vote_average.toFixed(1)}</div>
                              </div>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-2 items-start w-full">
                            <h1 className="text-white font-bold text-lg sm:text-xl line-clamp-1">{value.original_title}</h1>
                            <p className="text-gray-400 text-xs sm:text-sm">{value.release_date}</p>
                        </div>
                    </div>
                ): null
                
            })}
        </div>
        <div className="flex flex-row gap-3 sm:gap-5 items-center justify-center mt-6 sm:mt-8">
          {range < 20 && <button onClick={updater} className="text-white border-white border-2 font-semibold uppercase italic text-sm sm:text-xl rounded-2xl py-3 px-6 sm:p-4 m-1 sm:m-2 cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all" >Show more</button>}
          {range > 8 && <button onClick={reducer} className="text-white border-white border-2 font-semibold uppercase italic text-sm sm:text-xl rounded-2xl py-3 px-6 sm:p-4 m-1 sm:m-2 cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all" >Show less</button>}
        </div>
       </div>
    </>
  ) 
}

export default Section;
