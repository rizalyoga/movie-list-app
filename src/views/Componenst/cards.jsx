import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import allStore from "../../store/actions/index";

import LogoBanner from "../../assets/logo-banner.png";
import "./cards.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Cards = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const link = "https://image.tmdb.org/t/p/original/";

  const toNavigate = (id) => navigate(`/detailMovie/${id}`);
  const dispatchDetail = (id) => dispatch(allStore.fetchDetail(id));

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" card mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {props.movies.length &&
            props.movies.map((movie, index) => (
              <div key={index} className="group relative cards ">
                <div className="w-full min-h-50 bg-gray-800 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  y-900 lg:h-64 lg:aspect-none">
                  <LazyLoadImage
                    src={link.concat(movie.poster_path)}
                    alt="poster-movie"
                    effect="blur"
                    placeholderSrc={LogoBanner}
                  />
                </div>
                <div className="mt-4 flex justify-center ">
                  <div className="truncate ...">
                    <h3 className="text-lg text-gray-700 text-center pb-4 cards-text px-3 truncate ...">
                      <a href={movie.href} title={movie.original_title}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 text center shadow-lg cursor-pointer cards hover:transition hover:duration-300 hover:ease-in-out"
                          onClick={() => {
                            toNavigate(movie.id);
                            dispatchDetail(movie.id);
                          }}
                        />
                        {movie.original_title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
