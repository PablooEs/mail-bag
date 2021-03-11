import { IState } from "../types/State";
import { IMessage } from "../../IMAP";

const inState: IState = {
  view: "welcome",
  mailbox: "INBOX",
  contacts: [],
  messages: [],
};

export function stateReducer(state = inState, action: any): IState {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return {
        ...state,
        view: "message",
      };
    case "LIST_MESSAGES":
      return {
        ...state,
        messages: action.payload.messages,
        mailbox: action.payload.mailbox,
      };
    case "CHANGE_MAILBOX":
      return {
        ...state,
        mailbox: action.payload,
      };
    default:
      return state;
  }
}
