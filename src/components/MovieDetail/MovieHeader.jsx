import { Play, ChevronLeft } from "lucide-react";
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import Header from "../Header";

function MovieHeader() {
  
  const api_key = import.meta.env.VITE_MOVIE_API_KEY
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";
  const [movieData, setMovieData] = useState([]);
  const [charForBudget, setCharForBudget] = useState()
  const [charForRevenue, setCharForRevenue] = useState()
  const [numberForBudget, setNumberForBudget] = useState("")
  const [numberForRevenue, setNumberForRevenue] = useState("")
  const [numberLengthForBudget, setNumberLengthForBudget] = useState("")
  const [numberLengthForRevenue, setNumberLengthForRevenue] = useState("")
  const { id } = useParams();
  
  useEffect(() => {
    if(numberLengthForRevenue.length >= 4 && numberLengthForRevenue.length <= 6) {
      setCharForRevenue("K")
    } else if(numberLengthForRevenue.length >= 7 && numberLengthForRevenue.length <= 9) {
      setCharForRevenue("M")
    } else if(numberLengthForRevenue.length >= 10) {
      setCharForRevenue("B")
    }

    if(numberLengthForBudget.length >= 4 && numberLengthForBudget.length <= 6) {
      setCharForBudget("K")
    } else if(numberLengthForBudget.length >= 7 && numberLengthForBudget.length <= 9) {
      setCharForBudget("M")
    } else if(numberLengthForBudget.length >= 10) {
      setCharForBudget("B")
    }
  }, [numberLengthForRevenue, numberLengthForBudget])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        api_key
        },
      };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
       setMovieData(res)
       setNumberForRevenue(res.revenue.toLocaleString())
       setNumberLengthForRevenue(res.revenue.toString())
       setNumberForBudget(res.budget.toLocaleString())
       setNumberLengthForBudget(res.budget.toString())
      })
      .catch((err) => console.error(err));
      
  }, [id, api_key]);

  return (
    <>
      <div>
        <Header />
        <div className="relative min-h-screen lg:h-screen w-full flex items-center py-24 sm:py-28 md:py-32 lg:py-0">
          <div className="absolute inset-0">
            <img
              src={`${TMDB_IMAGE_BASE}${movieData.backdrop_path}`}
              className="w-full h-full object-cover"
              alt="Feature"
            />
            <div className="absolute inset-0 bg-[#0a0a0b]/85 lg:bg-transparent lg:bg-linear-to-r lg:from-[#0a0a0b] lg:via-[#0a0a0b]/75 lg:to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 w-full md:w-[85%] lg:w-[70%] xl:w-[60%] flex flex-col items-start mt-16 md:mt-24 lg:mt-6 gap-5 sm:gap-6 p-4 sm:p-8 md:p-12">
            <Link
              to={"/"}
              className="w-fit flex items-center mt-3 gap-2 text-red-500 hover:text-red-400 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-lg font-bold tracking-wider">BACK</span>
            </Link>
            <div className="flex flex-col justify-center gap-4 sm:gap-6 mt-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold italic leading-tight uppercase tracking-tight">
                {movieData.original_title}
              </h1>
              <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 font-semibold">{movieData.popularity == 0? "":"★"}</span>
                  <span>{movieData.popularity == 0? "Not known":  `${movieData.popularity}` }</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>{movieData.release_date}</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span className="uppercase text-[10px] sm:text-xs tracking-wider border border-gray-500/30 px-1.5 py-0.5 rounded">
                  {movieData.original_language}
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium italic leading-relaxed max-w-2xl">
                {movieData.overview}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:gap-4 items-start w-full text-sm">
              <div className="flex flex-row gap-4 items-center">
                <span className="uppercase text-xs tracking-wider text-gray-400 w-20">
                  Rating:  
                </span>
                <div className="flex flex-row gap-1 items-center">
                  <p className="text-gray-300">{movieData.vote_average == 0? "Not known": `${movieData.vote_average}`}</p>
                  <span className="text-yellow-400 font-semibold">{movieData.vote_average == 0? "":"★"}</span>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className="uppercase text-xs tracking-wider text-gray-400 w-20">
                  Budget:
                </span>
                <p className="text-gray-300">{numberForBudget == 0? "Not Known": `${numberForBudget}${charForBudget}$`}</p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className="uppercase text-xs tracking-wider text-gray-400 w-20">
                  Revenue:
                </span>
                <p className="text-gray-300">{numberForRevenue == 0? "Not Known": `${numberForRevenue}${charForRevenue}$`}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4 w-full sm:w-auto">
              <a
                href={`https://www.google.com/search?q=${movieData.original_title} movie`}
                target={"_blank"}
                className="px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-sm sm:text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center shadow-lg w-full sm:w-auto"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                WATCH NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieHeader;
