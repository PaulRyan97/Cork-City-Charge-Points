/**
 * Created by Paul on 04/08/2019.
 */
import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";

//again, overkill but more reducers will come
const reducers = combineReducers({
});

let builtLogger = createLogger({
    predicate:(getState, action) => action.type
});
let middleware = [thunk];
middleware.push(builtLogger);

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;