import axios from "axios";
import allStore from "./index.js";

export const fetchSimilar = (id, page) => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    console.log(id);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&page=1`)
      .then(({ data }) => {
        console.log(data);
        dispacth(setSimilar(data.results));
      })
      .catch((err) => {
        console.log(err.response.data.status_message);
      })
      .finally((_) => dispacth(allStore.setLoading(false)));
  };
};

export const setSimilar = (payload) => {
  return {
    type: "SET_SIMILAR",
    payload,
  };
};
