import { combineReducers } from "redux";

import auth from "./auth";
import debate from "./debate";
import modules from "./modules";
import pages from "./pages";

const allReducers = combineReducers({
  auth,
  debate,
  modules,
  pages
});

export default allReducers;
