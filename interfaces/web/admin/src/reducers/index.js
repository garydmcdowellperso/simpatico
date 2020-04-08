import { combineReducers } from "redux";

import auth from "./auth";
import debate from "./debate";

const allReducers = combineReducers({
  auth,
  debate
});

export default allReducers;
