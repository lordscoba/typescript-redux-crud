import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  userCreateReducer,
  userDeleteReducer,
  userGetReducer,
  userUpdateReducer,
  userViewReducer,
} from "./reducers/user_reducers";

export type StoreReducerTypes = {
  userCreate: any;
  userUpdate: any;
  userGet: any;
  userView: any;
  userDelete: any;
};

const reducer = combineReducers<StoreReducerTypes>({
  userCreate: userCreateReducer,
  userUpdate: userUpdateReducer,
  userGet: userGetReducer,
  userView: userViewReducer,
  userDelete: userDeleteReducer,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
