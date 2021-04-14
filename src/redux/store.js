import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducer";
// , applyMiddleware(logger)
const store = createStore(rootReducer);
export default store;