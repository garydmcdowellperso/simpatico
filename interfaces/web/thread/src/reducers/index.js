import { combineReducers } from "redux";

import auth from "./auth";
import post from "./post";

const allReducers = combineReducers({
  auth,
  post
});

export default allReducers;
