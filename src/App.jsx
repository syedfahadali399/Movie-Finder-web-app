import { Route, Routes } from "react-router-dom";
import Page from "./page";
import MovieDetailApp from "./components/MovieDetail/MovieDetailApp";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Page/>}/>
      <Route path="/movie/:id" element={<MovieDetailApp/>}/>
      <Route path="/movie/sreach/:id" element={<MovieDetailApp/>}/>
    </Routes>
  )
}

export default App
