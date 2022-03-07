import { fetchPost, setPost } from "./fetchPost";
import { fetchDetail, setDetails } from "./fetchDetails";
import setLoading from "./setLoading.js";
import { fetchSimilar, setSimilar } from "./fetchSimilar";
import { fetchTrending, setTrending } from "./fetchTrending";

const allStore = {
  fetchPost,
  setPost,
  fetchDetail,
  setDetails,
  setLoading,
  fetchSimilar,
  setSimilar,
  fetchTrending,
  setTrending,
};

export default allStore;
