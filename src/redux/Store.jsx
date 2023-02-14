import { createStore, applyMiddleware, combineReducers } from "redux";
import { WeatherReducer } from "./Reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  WeatherReducer
});

const WeatherStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default WeatherStore;
