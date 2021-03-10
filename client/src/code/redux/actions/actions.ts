import { IState } from "../types/State";

export const setState = (state: IState[]) => ({
  type: "LIST_MESSAGES",
  state,
});
