import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cards = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    // console.log("did Mount");

    return () => {
      //   console.log("did unmount!");
    };
  }, []);

  return (
    <div className="bg-white ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center pb-6">LIST MOVIES</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {props.movies.map((movie) => (
            <div key={movie.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-70 lg:h-75 lg:aspect-none">
                <img src={movie.imageSrc} alt={movie.imageAlt} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-lg text-gray-700 text-center pb-4">
                    <a href={movie.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 text center shadow-lg cursor-pointer "
                        onClick={() => {
                          navigate("/detailMovie");
                        }}
                      />
                      {movie.title}
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
