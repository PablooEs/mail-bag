import { IMessage } from "../../IMAP";

export interface IState {
  view: string;
  mailbox: string;
  messageDetail: IMessage;
  contacts: string[];
  messages: IMessage[];
}
