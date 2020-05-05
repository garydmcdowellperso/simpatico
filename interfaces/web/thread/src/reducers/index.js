import { combineReducers } from "redux";

import auth from "./auth";
import post from "./post";
import module from "./module";

const allReducers = combineReducers({
  auth,
  post,
  module
});

export default allReducers;
