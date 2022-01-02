import { useEffect } from "react";
import Home from "./views/Home/";
import Navbar from "./views/Componenst/navbar.jsx";
import DetailMovie from "./views/Detail-Movie/movie-detail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import allStore from "./store/actions/";

const App = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(allStore.fetchPost());
  }, [dispacth]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:page" element={<Home />} />
        <Route path="/detailMovie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
