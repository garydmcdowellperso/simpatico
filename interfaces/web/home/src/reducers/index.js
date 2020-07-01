import { combineReducers } from "redux";

import auth from "./auth";
import debate from "./debate";
import modules from "./modules";
import pages from "./pages";
import posts from "./posts";

const allReducers = combineReducers({
  auth,
  debate,
  modules,
  pages,
  posts
});

export default allReducers;
