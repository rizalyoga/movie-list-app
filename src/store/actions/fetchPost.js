import axios from "axios";
import allStore from "./index.js";

export const fetchPost = (page) => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=519d809c83b6f9bbf372a2ed5633376d&language=en-US&page=${page}`)
      .then(({ data }) => {
        // console.log(data);
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
