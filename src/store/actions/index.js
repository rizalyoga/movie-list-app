import { fetchPost, setPost } from "./fetchPost";
import { fetchDetail, setDetails } from "./fetchDetails";
import setLoading from "./setLoading.js";
import { fetchSimilar, setSimilar } from "./fetchSimilar";

const allStore = {
  fetchPost,
  setPost,
  fetchDetail,
  setDetails,
  setLoading,
  fetchSimilar,
  setSimilar,
};

export default allStore;
