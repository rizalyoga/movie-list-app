import axios from "axios";

export const fetchPost = () => {
  return (dispacth) => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=519d809c83b6f9bbf372a2ed5633376d&language=en-US&page=1")
      .then(({ data }) => {
        // console.log(data);
        dispacth(setPost(data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setPost = (payload) => {
  return {
    type: "SET_POST",
    payload,
  };
};
