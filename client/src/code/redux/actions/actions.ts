import * as IMAPCall from "../../IMAP";

export const listMessages = (mailbox: string) => async (dispatch: any) => {
  const IMAPWorker: IMAPCall.Worker = new IMAPCall.Worker();
  const listedMessages = await IMAPWorker.listMessages(mailbox);
  dispatch({ type: "LIST_MESSAGES", payload: listedMessages });
};

export const setMailBox = (payload: string) => ({
  type: "CHANGE_MAILBOX",
  payload,
});
