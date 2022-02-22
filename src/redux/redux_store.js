import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { auth_reducer } from "./reducers/auth_reducer";
import { posts_reducer } from "./reducers/posts_reducer";

let reducers = combineReducers({
  auth: auth_reducer,
  posts: posts_reducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
