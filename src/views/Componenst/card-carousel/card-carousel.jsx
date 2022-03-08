import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import allStore from "../../../store/actions/index";
import "./card-carousel.css";

const CardTrending = ({ trending }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const toNavigate = (id) => navigate(`/detailMovie/${id}`);

  const dispatchDetail = (id) => dispatch(allStore.fetchDetail(id));

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 3000,
    // lazyLoad: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const link = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="container">
      <h2 style={{ marginTop: "6rem", marginBottom: "-4rem", fontSize: "1.8rem", textAlign: "left", zIndex: "20" }} className="font-bold">
        Trending Movie
      </h2>
      <Slider {...settings} style={{ marginTop: "5rem", cursor: "pointer" }}>
        {trending.map((movie) => (
          <div key={movie.id} className="poster">
            <img
              src={link.concat(movie.poster_path)}
              className="cards w-full h-full  bg-gray-800"
              alt="Tailwind CSS Carousel component"
              onClick={() => {
                toNavigate(movie.id);
                dispatchDetail(movie.id);
              }}
            />
          </div>
        ))}
      </Slider>
      <h2 style={{ marginTop: "4rem", marginBottom: "-4rem", fontSize: "1.8rem", textAlign: "left", zIndex: "20" }} className="font-bold">
        Now Playing
      </h2>
    </div>
  );
};

export default CardTrending;
