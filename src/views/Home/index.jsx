import Cards from "../Componenst/cards.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index.js";
import Banner from "../Componenst/banner.jsx";
// import Loader from "../Componenst/Loader/loader.jsx";
import CardTrending from "../Componenst/card-carousel/card-carousel.jsx";

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

  const trending = useSelector(({ trendingMovie }) => trendingMovie);
  // const loading = useSelector(({ loading }) => loading);

  const dispatch = useDispatch();

  let PAGE_NUMBER = 2;

  const [posts, setPosts] = useState(post);
  let [page, setPage] = useState(PAGE_NUMBER);

  /* ------------------------------- FETCH POST ------------------------------- */
  useEffect(() => {
    dispatch(allStore.fetchPost(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (posts.length === 0) {
      setPosts(post);
    }
  }, [post, posts.length]);

  const loadMore = (e) => {
    e.preventDefault();
    setPage((page += 1));
    dispatch(allStore.fetchPost(page));
    setPosts(() => [...posts, ...post]);
  };

  useEffect(() => {
    dispatch(allStore.fetchTrending());
  }, [dispatch]);

  return (
    <div className="bg-gray-200 flex items-center justify-center flex-col">
      <Banner />
      {/* {post.length > 0 && post.map((el) => {})} */}
      <div className="w-10/12">
        <CardTrending trending={trending} />
      </div>
      <div className="container ml-8 md:ml-20 xl:ml-14" style={{ zIndex: "20" }}>
        <div className="title-list w-full">
          <h1 style={{ marginTop: "5rem", marginBottom: "-6rem", fontSize: "1.8rem", textAlign: "left" }} className="font-bold">
            Now Playing Movie
          </h1>
        </div>
      </div>
      <Cards movies={posts} page={page} />
      <div className="flex">
        <button className="inline-flex items-center justify-center text-base font-medium py-3 px-4 rounded text-white bg-gray-800" id="more" style={{ marginTop: "-50px", marginBottom: "30px" }} onClick={(e) => loadMore(e)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
