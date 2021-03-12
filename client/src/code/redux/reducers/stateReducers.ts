import { IState } from "../types/State";

const inState: IState = {
  view: "welcome",
  mailbox: "INBOX",
  messageDetail: { id: "", date: "", from: "", subject: "", body: "" },
  contacts: [],
  messages: [],
};

export function stateReducer(state = inState, action: any): IState {
  switch (action.type) {
    case "LIST_MESSAGES":
      return {
        ...state,
        view: "welcome",
        messages: action.payload.messages,
        mailbox: action.payload.mailbox,
      };
    case "CHANGE_MAILBOX":
      return {
        ...state,
        mailbox: action.payload,
      };
    case "MESSAGE_DETAIL":
      return {
        ...state,
        messageDetail: action.payload,
      };
    case "CHANGE_VIEW":
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
}
