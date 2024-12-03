import { createStore, combineReducers } from "redux";
import accountReducer from "./Features/accounts/accountsSlice";
import customerReducer from "./Features/customers/customerSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
