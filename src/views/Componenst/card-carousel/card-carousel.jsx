import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import allStore from "../../../store/actions/index";

const CardTrending = ({ trending }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const toNavigate = (id) => navigate(`/detailMovie/${id}`);

  const dispatchDetail = (id) => dispatch(allStore.fetchDetail(id));

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 5,
    autoplay: true,
    speed: 3000,
    // lazyLoad: true,
    autoplaySpeed: 2000,
  };

  const link = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="container">
      <h2 style={{ marginTop: "6rem", marginBottom: "-4rem", fontSize: "1.8rem", textAlign: "left", zIndex: "20" }} className="font-bold">
        Trending Movie
      </h2>
      <Slider {...settings} style={{ marginTop: "5rem", cursor: "pointer" }}>
        {trending.map((movie) => (
          <div key={movie.id} style={{ maxWidth: "400px" }}>
            <img
              src={link.concat(movie.poster_path)}
              className="w-full"
              alt="Tailwind CSS Carousel component"
              onClick={() => {
                toNavigate(movie.id);
                dispatchDetail(movie.id);
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardTrending;
