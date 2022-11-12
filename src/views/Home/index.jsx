import React, { useState, useEffect, useRef, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index.js";
import Banner from "../Componenst/banner.jsx";
import useOnScreen from "../Script/useOnScreen";
import TopButton from "../Componenst/top-button/topButon.jsx";

// import CardTrending from "../Componenst/card-carousel/card-carousel.jsx";
const CardTrending = React.lazy(() =>
  import("../Componenst/card-carousel/card-carousel.jsx")
);

const Cards = React.lazy(() => import("../Componenst/cards.jsx"));

const Home = () => {
  const post = useSelector(({ listPost }) => listPost);
  const trending = useSelector(({ trendingMovie }) => trendingMovie);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const dispatch = useDispatch();
  const [posts, setPosts] = useState(post);
  const [visible, setVisible] = useState(true);

  let PAGE_NUMBER = 2;
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
    setPage((page += 1));
    setPosts(() => [...posts, ...post]);
  };

  /* ----------------------------- FETCH TRENDING ----------------------------- */
  useEffect(() => {
    dispatch(allStore.fetchTrending());
  }, [dispatch]);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      if (visible === true) {
        loadMore();
      }
    }
  }, [isVisible]);

  return (
    <div className="bg-gray-200 flex items-center justify-center flex-col">
      <Banner />
      {/* {post.length > 0 && post.map((el) => {})} */}
      <div className="w-10/12">
        <Suspense fallback={<div>Loading...</div>}>
          <CardTrending trending={trending} />
        </Suspense>
      </div>
      <TopButton />
      <div
        className="container ml-8 md:ml-20 xl:ml-14"
        style={{ zIndex: "20" }}
      ></div>

      {/* <InfinitesSroll dataLength={post.length + post.length} next={loadMore} hasMore={true} loader={<h4>Loading...</h4>}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Cards movies={posts} page={page} />
      </Suspense>

      {/* </InfinitesSroll> */}
      <div className="flex">
        <button
          ref={ref}
          style={{ marginTop: "-50px", marginBottom: "30px" }}
          className="inline-flex items-center justify-center text-base font-medium py-3 px-4 rounded text-white bg-gray-800"
          id="more"
          onClick={(e) => loadMore(e)}
        >
          Please Wait...
        </button>
      </div>
    </div>
  );
};

export default Home;
