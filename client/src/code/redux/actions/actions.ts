import { IState } from "../types/State";

export const setState = (state: IState[]) => ({
  type: "SET_STATE",
  state,
});
