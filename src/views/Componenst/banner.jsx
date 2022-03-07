import "./banner.css";
import logo from "../../assets/workflow-logo-indigo-500-mark-white-text.svg";

const Banner = () => {
  return (
    <div className="banner">
      <img className="center" src={logo} alt="logo" />
      <h3 className="desc text-white">
        MOVIE DATABASE | FILM REVIEWS <br />
        ONLINE CINEMA
      </h3>
      {/* <h3 className="desc text-white">FILM REVIEWS</h3> */}
      {/* <h3 className="desc text-white">ONLINE CINEMA</h3> */}
    </div>
  );
};

export default Banner;
