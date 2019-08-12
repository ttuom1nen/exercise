import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import modeReducer from "./modeReducer";
import selectUserReducer from "./selectUserReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  selectedUser: selectUserReducer,
  mode: modeReducer
});
