import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import { crudReducer } from "./crudReducer";
import { shoppingReducer } from "./shoppingReducer";

const reducer = combineReducers({
  counter: counterReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
});

export default reducer;
