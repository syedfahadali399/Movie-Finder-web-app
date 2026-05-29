import { Route, Routes } from "react-router-dom";
import MovieDetailApp from "./components/MovieDetail/MovieDetailApp";
import Page from "./Page";

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
