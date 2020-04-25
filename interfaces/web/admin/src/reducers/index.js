import { combineReducers } from "redux";

import auth from "./auth";
import debate from "./debate";
import pages from "./pages";
import stats from "./stats";

const allReducers = combineReducers({
  auth,
  debate,
  pages,
  stats
});

export default allReducers;
