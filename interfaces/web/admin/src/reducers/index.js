import { combineReducers } from "redux";

import account from "./account";
import auth from "./auth";
import debate from "./debate";
import modules from "./modules";
import pages from "./pages";
import stats from "./stats";
import users from "./users";

const allReducers = combineReducers({
  account,
  auth,
  debate,
  modules,
  pages,
  stats,
  users
});

export default allReducers;
