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
      
  }, [id]);

  return (
    <>
      <div>
        <Header />
        <div className="relative h-screen w-full flex items-center">
          <div className="absolute inset-0">
            <img
              src={`${TMDB_IMAGE_BASE}${movieData.backdrop_path}`}
              className="w-full h-full object-cover"
              alt="Feature"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent" />
          </div>
          <div className="relative inset-0 z-10 w-[60%] flex flex-col items-start mt-6 gap-6 p-6">
            <Link
              to={"/"}
              className="w-fit flex items-center mt-3 gap-2 text-red-500 hover:text-red-400 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg font-bold tracking-wider">BACK</span>
            </Link>
            <div className="flex flex-col justify-center gap-6 mt-1">
              <h1 className="text-7xl text-white font-bold italic">
                {movieData.original_title}
              </h1>
              <div className="flex flex-row items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 font-semibold">★</span>
                  <span>{movieData.popularity == 0? "Not known":  `${movieData.popularity}` }</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>{movieData.release_date}</span>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span className="uppercase text-xs tracking-wider">
                  {movieData.original_language}
                </span>
              </div>
              <p className="text-lg text-gray-300 font-medium italic">
                {movieData.overview}
              </p>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <div className="flex flex-row gap-4 items-center">
                <span className="uppercase text-xs tracking-wider text-gray-300">
                  Rating:  
                </span>
                <div className="flex flex-row gap-1 items-center">
                <p className="text-gray-300">{movieData.vote_average == 0? "Not known": `10 / ${movieData.vote_average}`}   </p>
                <span className="text-yellow-400 font-semibold">★</span>

                </div>

              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className="uppercase text-xs tracking-wider text-gray-300">
                  Budget:
                </span>
                <p className="text-gray-300">{numberForBudget == 0? "Not Known": `${numberForBudget}${charForBudget}$`}</p>

              </div>
              <div className="flex flex-row gap-4 items-center">
                <span className="uppercase text-xs tracking-wider text-gray-300">
                  Revenue:
                </span>
                <p className="text-gray-300">{numberForRevenue == 0? "Not Known": `${numberForRevenue}${charForRevenue}$`}</p>

              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={`https://www.google.com/search?q=${movieData.original_title} movie`}
                target={"_blank"}
                // onClick={onWatch}
                className="px-8 py-3 md:px-10 md:py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Play className="w-5 h-5 fill-current" />
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
