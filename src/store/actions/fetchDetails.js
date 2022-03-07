import axios from "axios";
import allStore from "./index.js";

export const fetchDetail = (payload) => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    axios
      .get(`https://api.themoviedb.org/3/movie/${payload}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`)
      .then(({ data }) => {
        dispacth(setDetails(data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispacth(allStore.setLoading(false)));
  };
};

export const setDetails = (payload) => {
  return {
    type: "SET_DETAILS",
    payload,
  };
};
