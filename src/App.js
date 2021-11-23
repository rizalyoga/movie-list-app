import Home from "./views/Home/";
import Navbar from "./views/Componenst/navbar.jsx";
import DetailMovie from "./views/Detail-Movie/movie-detail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailMovie" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
