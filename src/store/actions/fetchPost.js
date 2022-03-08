import axios from "axios";
import allStore from "./index.js";

export const fetchPost = (page) => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=${page}`)
      .then(({ data }) => {
        dispacth(setPost(data.results));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispacth(allStore.setLoading(false)));
  };
};

export const setPost = (payload) => {
  return {
    type: "SET_POST",
    payload,
  };
};
