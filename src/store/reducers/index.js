import { combineReducers } from "redux";
import listPost from "./postReduce";
import detail from "./detailsReduce";
import loading from "./loadingReducers";
import similarMovie from "./similarReduce";

const rootReducers = combineReducers({
  listPost,
  detail,
  loading,
  similarMovie,
});

export default rootReducers;
