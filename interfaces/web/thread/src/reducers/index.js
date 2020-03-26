import { combineReducers } from "redux";

import auth from "./auth";
import post from "./post";
import thread from "./thread";

const allReducers = combineReducers({
  auth,
  post,
  thread
});

export default allReducers;
