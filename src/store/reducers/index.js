import { combineReducers } from "redux";
import listPost from "./postReduce";
import detail from "./detailsReduce";
import loading from "./loadingReducers";
import similarMovie from "./similarReduce";
import trendingMovie from "./trendingReducers";
import searchMovie from "./searchReduce";

const rootReducers = combineReducers({
  listPost,
  detail,
  loading,
  similarMovie,
  trendingMovie,
  searchMovie,
});

export default rootReducers;
