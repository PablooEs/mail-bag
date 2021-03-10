import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { IState } from "../redux/types/State";
import { stateReducer } from "../redux/reducers/stateReducers";

export interface IRootState {
  state: IState;
}

const reducer = combineReducers({
  state: stateReducer,
});

export const store = createStore<IRootState, any, any, any>(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
