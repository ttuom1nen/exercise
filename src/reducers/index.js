import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import modeReducer from "./modeReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  mode: modeReducer
});
