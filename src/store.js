import { createStore, combineReducers, applyMiddleware } from "redux";
import accountReducer from "./Features/accounts/accountsSlice";
import customerReducer from "./Features/customers/customerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
