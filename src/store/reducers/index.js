import { combineReducers } from "redux";
import listPost from "./postReduce";

const rootReducers = combineReducers({
  listPost,
});

export default rootReducers;
