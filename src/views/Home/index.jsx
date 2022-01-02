import Cards from "../Componenst/cards.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index.js";
import Banner from "../Componenst/banner.jsx";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";

const Home = () => {
  // const [listMovie] = useState([
  //   {
  //     id: 1,
  //     title: "NARUTO",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781591163596%2Fnaruto-vol-5-9781591163596_hr.jpg&f=1&nofb=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 2,
  //     title: "BLEACH",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FgUYE9DY_0Sj-eWD6pRa9wHaLH%26pid%3DApi&f=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 3,
  //     title: "HUNTER X HUNTER",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VXfxcyG6T-Szr3omd_dLAHaLH%26pid%3DApi&f=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 4,
  //     title: "SAMURAI X",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 5,
  //     title: "NARUTO",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781591163596%2Fnaruto-vol-5-9781591163596_hr.jpg&f=1&nofb=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 6,
  //     title: "BLEACH",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FgUYE9DY_0Sj-eWD6pRa9wHaLH%26pid%3DApi&f=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 7,
  //     title: "HUNTER X HUNTER",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VXfxcyG6T-Szr3omd_dLAHaLH%26pid%3DApi&f=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 8,
  //     title: "SAMURAI X",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 9,
  //     title: "NARUTO",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781591163596%2Fnaruto-vol-5-9781591163596_hr.jpg&f=1&nofb=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 10,
  //     title: "BLEACH",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FgUYE9DY_0Sj-eWD6pRa9wHaLH%26pid%3DApi&f=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 11,
  //     title: "HUNTER X HUNTER",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VXfxcyG6T-Szr3omd_dLAHaLH%26pid%3DApi&f=1",
  //     imageAlt: "movie-cover",
  //   },
  //   {
  //     id: 12,
  //     title: "SAMURAI X",
  //     imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1",
  //     imageAlt: "movie-cover",
  //   },
  // ]);

  // const dispatch = useDispatch();
  const post = useSelector(({ listPost }) => listPost);
  const loading = useSelector(({ loading }) => loading);

  const dispatch = useDispatch();
  // let params = useParams();

  const navigate = useNavigate();
  let PAGE_NUMBER = 1;

  // const [state, setState] = useState([]);
  let [page, setPage] = useState(PAGE_NUMBER);

  // const scrollToEnd = () => {
  //   setPage((page += 1));
  // };

  // window.onscroll = function () {
  //   if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
  //     scrollToEnd();
  //     console.log("fetching");
  //     document.documentElement.scrollTop = 500;
  //   }
  // };

  useEffect(() => {
    dispatch(allStore.fetchPost(page));
    console.log(page);
    // setState((prev) => [...prev, ...post]);
  }, [dispatch, page]);

  const Next = (e) => {
    e.preventDefault();
    setPage((page += 1));
    document.documentElement.scrollTop = 500;
    navigate(`/page/${page}`);
  };

  const Previous = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage((page -= 1));
      navigate(`/page/${page}`);
    }
    document.documentElement.scrollTop = 500;
    navigate(`/`);
  };

  if (loading) {
    console.log("loading bos");
    return (
      <div className="bg-white flex justify-center items-center" style={{ height: "100vh" }}>
        <h1 className="text-center text-white" style={{ margin: "auto" }}>
          PLEASE WAIT ...
        </h1>
        ;
      </div>
    );
  }

  // useEffect(() => {
  //   console.log(params);
  // }, [params]);

  return (
    <div className="bg-gray-200 flex items-center justify-center flex-col">
      <Banner />
      {/* {post.length > 0 && post.map((el) => {})} */}
      <Cards movies={post} />
      <div className="flex">
        <button className="inline-flex items-center justify-center px-5 py-3  text-base font-medium rounded-md text-black" id="more" style={{ marginTop: "-50px", marginBottom: "30px" }} onClick={(e) => Previous(e)}>
          <ArrowSmLeftIcon className="w-7 h-7 text-gray-600 pr-1" />
          Previous
        </button>
        <button className="inline-flex items-center justify-center px-5 py-3  text-base font-medium rounded-md text-black" id="more" style={{ marginTop: "-50px", marginBottom: "30px" }} onClick={(e) => Next(e)}>
          Next
          <ArrowSmRightIcon className="w-7 h-7 text-gray-600 pr-1" />
        </button>
      </div>
    </div>
  );
};

export default Home;
