import { IState } from "../types/State";

const inState: IState = { view: "welcome", contacts: [], messages: [] };

export function stateReducer(state = inState, action: any): IState {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return {
        ...state,
        view: "message",
      };
    default:
      return state;
  }
}
