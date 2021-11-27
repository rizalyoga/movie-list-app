// import React from "react";
import Cards from "../Componenst/cards.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index.js";
import Banner from "../Componenst/banner.jsx";

const Home = () => {
  const [listMovie] = useState([
    {
      id: 1,
      title: "NARUTO",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781591163596%2Fnaruto-vol-5-9781591163596_hr.jpg&f=1&nofb=1",
      imageAlt: "movie-cover",
    },
    {
      id: 2,
      title: "BLEACH",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FgUYE9DY_0Sj-eWD6pRa9wHaLH%26pid%3DApi&f=1",
      imageAlt: "movie-cover",
    },
    {
      id: 3,
      title: "HUNTER X HUNTER",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VXfxcyG6T-Szr3omd_dLAHaLH%26pid%3DApi&f=1",
      imageAlt: "movie-cover",
    },
    {
      id: 4,
      title: "SAMURAI X",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1",
      imageAlt: "movie-cover",
    },
    {
      id: 5,
      title: "NARUTO",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781591163596%2Fnaruto-vol-5-9781591163596_hr.jpg&f=1&nofb=1",
      imageAlt: "movie-cover",
    },
    {
      id: 6,
      title: "BLEACH",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FgUYE9DY_0Sj-eWD6pRa9wHaLH%26pid%3DApi&f=1",
      imageAlt: "movie-cover",
    },
    {
      id: 7,
      title: "HUNTER X HUNTER",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VXfxcyG6T-Szr3omd_dLAHaLH%26pid%3DApi&f=1",
      imageAlt: "movie-cover",
    },
    {
      id: 8,
      title: "SAMURAI X",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1",
      imageAlt: "movie-cover",
    },
    {
      id: 9,
      title: "NARUTO",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28hgpri8am2if.cloudfront.net%2Fbook_images%2Fonix%2Fcvr9781591163596%2Fnaruto-vol-5-9781591163596_hr.jpg&f=1&nofb=1",
      imageAlt: "movie-cover",
    },
    {
      id: 10,
      title: "BLEACH",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FgUYE9DY_0Sj-eWD6pRa9wHaLH%26pid%3DApi&f=1",
      imageAlt: "movie-cover",
    },
    {
      id: 11,
      title: "HUNTER X HUNTER",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VXfxcyG6T-Szr3omd_dLAHaLH%26pid%3DApi&f=1",
      imageAlt: "movie-cover",
    },
    {
      id: 12,
      title: "SAMURAI X",
      imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flifestyle.inquirer.net%2Ffiles%2F2017%2F08%2F91wIh4z3u8L.jpg&f=1&nofb=1",
      imageAlt: "movie-cover",
    },
  ]);

  const dispatch = useDispatch();
  const post = useSelector(({ listPost }) => listPost);

  // useEffect(() => {
  //   dispatch(allStore.fetchPost());
  // }, [dispatch, post]);

  // useEffect(() => {
  //   console.log(post);
  // }, [post]);

  // if (post.result === undefined) {
  // return <h1>ERROR</h1>;
  // }

  return (
    <>
      <Banner />
      <Cards movies={post} />
    </>
  );
};

export default Home;
