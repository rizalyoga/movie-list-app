import { fetchPost, setPost } from "./fetchPost";
import { fetchDetail, setDetails } from "./fetchDetails";
import setLoading from "./setLoading.js";
import { fetchSimilar, setSimilar } from "./fetchSimilar";
import { fetchTrending, setTrending } from "./fetchTrending";
import { fetchSearch, setSearch } from "./fetchSearch";

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
  fetchSearch,
  setSearch,
};

export default allStore;
