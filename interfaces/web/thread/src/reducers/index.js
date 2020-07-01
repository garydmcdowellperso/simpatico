import { combineReducers } from "redux";

import auth from "./auth";
import post from "./post";
import module from "./module";
import users from "./users";

const allReducers = combineReducers({
  auth,
  post,
  module,
  users
});

export default allReducers;
