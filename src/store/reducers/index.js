import { combineReducers } from "redux";
import listPost from "./postReduce";
import detail from "./detailsReduce";
import loading from "./loadingReducers";

const rootReducers = combineReducers({
  listPost,
  detail,
  loading,
});

export default rootReducers;
