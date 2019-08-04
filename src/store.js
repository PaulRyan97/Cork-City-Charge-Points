/**
 * Created by Paul on 04/08/2019.
 */
//@flow
import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import navigationReducer from "./Navigation/reducers/navigationReducer";

//again, overkill but more reducers will come
const reducers = combineReducers({
    navigationState: navigationReducer
});

let builtLogger = createLogger({
    predicate:(getState, action) => action.type
});
let middleware = [thunk];
middleware.push(builtLogger);

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;