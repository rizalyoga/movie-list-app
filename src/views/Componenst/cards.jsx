import { useNavigate } from "react-router-dom";
import "./cards.css";
// import allStore from "../../store/actions/index.jsx"
import { useSelector } from "react-redux";

const Cards = (props) => {
  let navigate = useNavigate();
  const loading = useSelector(({ loading }) => loading);

  const toNavigate = (id) => navigate(`/detailMovie/${id}`);

  const link = "https://image.tmdb.org/t/p/original/";

  if (loading) {
    // console.log("loading bos CARD");
    return (
      <div className="bg-white flex justify-center items-center" style={{ height: "100vh" }}>
        <h1 className="text-center text-white" style={{ margin: "auto" }}>
          PLEASE WAIT ...
        </h1>
        ;
      </div>
    );
  }

  return (
    <div className="bg-gray-200 ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center pb-6">LIST MOVIES</h2> */}
        <div className=" card mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {props.movies.length > 0 &&
            props.movies.map((movie, index) => (
              <div key={index} className="group relative cards ">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden  y-900 lg:h-75 lg:aspect-none">
                  <img src={link.concat(movie.poster_path)} alt="poster-movie" className=" w-full h-full object-center object-cover lg:w-full lg:h-full " />
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
