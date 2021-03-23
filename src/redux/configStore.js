import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import calendar from "./modules/calendar"
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const middlewares = [thunk]

const rootReducer = combineReducers({calendar});

const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);

export default store;