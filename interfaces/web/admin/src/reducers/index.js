import { combineReducers } from "redux";

import auth from "./auth";
import debate from "./debate";
import modules from "./modules";
import pages from "./pages";
import stats from "./stats";

const allReducers = combineReducers({
  auth,
  debate,
  modules,
  pages,
  stats
});

export default allReducers;
