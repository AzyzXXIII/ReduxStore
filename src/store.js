/* import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; */

import accountReducer from "./Features/accounts/accountsSlice";
import customerReducer from "./Features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

export default store;
