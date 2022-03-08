import axios from "axios";
import allStore from "./index.js";

export const fetchSearch = (title) => {
  return (dispacth) => {
    dispacth(allStore.setLoading(true));
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
      .then(({ data }) => {
        // console.log(data);
        dispacth(setSearch(data.results));
        window.location.href = `search/${title}`;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => dispacth(allStore.setLoading(false)));
  };
};

export const setSearch = (payload) => {
  return {
    type: "SET_SEARCH",
    payload,
  };
};
