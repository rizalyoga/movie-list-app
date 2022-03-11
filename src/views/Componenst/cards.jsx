import { useNavigate } from "react-router-dom";
import "./cards.css";
// import allStore from "../../store/actions/index.jsx"
import { useDispatch } from "react-redux";
import allStore from "../../store/actions/index";

const Cards = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const toNavigate = (id) => navigate(`/detailMovie/${id}`);

  const dispatchDetail = (id) => dispatch(allStore.fetchDetail(id));

  const link = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center pb-6">LIST MOVIES</h2> */}
        <div className=" card mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {props.movies.length > 0 &&
            props.movies.map((movie, index) => (
              <div key={index} className="group relative cards ">
                <div className="w-full min-h-80 bg-gray-800 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  y-900 lg:h-75 lg:aspect-none">
                  {movie.poster_path ? (
                    <img src={link.concat(movie.poster_path)} alt="poster-movie" className=" bg-gray-800 w-full h-full object-center object-cover lg:w-full lg:h-full min-h-80 " />
                  ) : (
                    <div className="bg-gray-800 min-h-80"></div>
                  )}
                </div>
                <div className="mt-4 flex justify-center ">
                  <div>
                    <h3 className="text-lg text-gray-700 text-center pb-4 cards-text ">
                      <a href={movie.href}>
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
