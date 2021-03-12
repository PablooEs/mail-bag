import * as React from "react";
import { IRootState } from "../code/redux/store";
import { useSelector } from "react-redux";
import { IMessage } from "../code/IMAP";

export const MessageDetail: React.FC = () => {
  const selectMessage = (state: IRootState) => state.state.messageDetail;
  const message = useSelector(selectMessage);
  return (
    <ul>
      {console.log(message)}
      <li>{message.from}</li>
      <li>{message.date}</li>
      <li>{message.subject}</li>
      <li>{message.body}</li>
    </ul>
  );
};
