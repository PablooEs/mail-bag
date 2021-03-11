import { IMessage } from "../../IMAP";

export interface IState {
  view: string;
  mailbox: string;
  contacts: string[];
  messages: IMessage[];
}
