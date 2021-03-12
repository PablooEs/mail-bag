import * as IMAPCall from "../../IMAP";
import { IMessage } from "../../IMAP";

export const listMessages = (mailbox: string) => async (dispatch: any) => {
  const IMAPWorker: IMAPCall.Worker = new IMAPCall.Worker();
  const listedMessages = await IMAPWorker.listMessages(mailbox);
  dispatch({
    type: "LIST_MESSAGES",
    payload: { messages: listedMessages, mailbox: mailbox },
  });
};

export const showMessageDetails = (
  message: IMessage,
  mailbox: string
) => async (dispatch: any) => {
  const IMAPWorker: IMAPCall.Worker = new IMAPCall.Worker();
  const messageBody = await IMAPWorker.getMessageBody(message.id, mailbox);
  dispatch({
    type: "MESSAGE_DETAIL",
    payload: {
      id: message.id,
      from: message.from,
      subject: message.subject,
      date: message.date,
      body: messageBody,
    },
  });
};

export const setMailBox = (payload: string) => ({
  type: "CHANGE_MAILBOX",
  payload,
});
