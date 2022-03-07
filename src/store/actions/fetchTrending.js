import axios from "axios";
import allStore from "./index.js";

export const fetchTrending = () => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=1`)
      .then(({ data }) => {
        console.log("trending : ", data);
        dispacth(setTrending(data.results));
      })
      .catch((err) => {
        console.log(err.response.data.status_message);
      })
      .finally((_) => dispacth(allStore.setLoading(false)));
  };
};

export const setTrending = (payload) => {
  return {
    type: "SET_TRENDING",
    payload,
  };
};
