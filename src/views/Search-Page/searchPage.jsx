import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Componenst/cards";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const movie = useSelector(({ searchMovie }) => searchMovie);
  const { title } = useParams();

  return (
    <div className="bg-gray-200">
      {movie.length <= 0 ? (
        <div className="bg-gray-200 flex justify-center items-center" style={{ minHeight: "100vh" }}>
          <h1 className="text-center text-gray-800" style={{ margin: "auto", fontSize: "3rem" }}>
            Oops, Movie Not Found !!!
          </h1>
        </div>
      ) : (
        <>
          <h1 className="text-gray-800 text-center" style={{ marginBottom: "-3rem", paddingTop: "3rem", fontSize: "1.5rem" }}>
            Result of " {title} "
          </h1>
          <Cards movies={movie} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
