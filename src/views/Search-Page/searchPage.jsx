import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Cards = lazy(() => import("../Componenst/cards"));

const SearchPage = () => {
  const movie = useSelector(({ searchMovie }) => searchMovie);
  const { title } = useParams();

  return (
    <div className="bg-gray-200">
      {movie.length <= 0 ? (
        <div
          className="bg-gray-200 flex justify-center items-center"
          style={{ minHeight: "100vh" }}
        >
          <h1
            className="text-center text-gray-800"
            style={{ margin: "auto", fontSize: "3rem" }}
          >
            Oops, Movie Not Found !!!
          </h1>
        </div>
      ) : (
        <>
          <h1
            className="text-gray-800 text-center pt-24"
            style={{ marginBottom: "-3rem", fontSize: "1.5rem" }}
          >
            Result of " {title} "
          </h1>
          <Suspense
            fallback={
              <div>
                <h4>Loading...</h4>
              </div>
            }
          >
            <Cards movies={movie} />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default SearchPage;
