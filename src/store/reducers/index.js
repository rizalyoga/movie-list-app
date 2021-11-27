import { combineReducers } from "redux";
import listPost from "./postReduce";
import detail from "./detailsReduce";

const rootReducers = combineReducers({
  listPost,
  detail,
});

export default rootReducers;
