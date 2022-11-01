import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import allStore from "./store/actions/";

import Navbar from "./views/Componenst/navbar.jsx";
import Loader from "./views/Componenst/Loader/loader.jsx";

// import Home from "./views/Home/";
// import DetailMovie from "./views/Detail-Movie/movie-detail.jsx";
// import SearchPage from "./views/Search-Page/searchPage.jsx";

const Home = lazy(() => import("./views/Home/"));
const DetailMovie = lazy(() => import("./views/Detail-Movie/movie-detail.jsx"));
const SearchPage = lazy(() => import("./views/Search-Page/searchPage.jsx"));

const App = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(allStore.fetchPost());
  }, [dispacth]);

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:page" element={<Home />} />
          <Route path="/detailMovie/:id" element={<DetailMovie />} />
          <Route path="/search/:title" element={<SearchPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
