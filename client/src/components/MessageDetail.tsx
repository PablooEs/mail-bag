import * as React from "react";
import { IRootState } from "../code/redux/store";
import { useSelector } from "react-redux";

export const MessageDetail: React.FC = () => {
  const selectMessage = (state: IRootState) => state.state.messageDetail;
  const message = useSelector(selectMessage);
  return (
    <ul>
      <li>{message.from}</li>
      <li>{message.date}</li>
      <li>{message.subject}</li>
      <li>{message.body}</li>
    </ul>
  );
};
