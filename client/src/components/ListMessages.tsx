import * as React from "react";
import { IRootState } from "../code/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  listMessages,
  showMessageDetails,
} from "../code/redux/actions/actions";
import { IMessage } from "../code/IMAP";

export const ListMessages: React.FC = () => {
  const viewMessages = (state: IRootState) => state.state.messages;
  const currentMailBox = (state: IRootState) => state.state.mailbox;
  const messages = useSelector(viewMessages);
  const mailbox = useSelector(currentMailBox);
  const [start, setStart] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(listMessages(mailbox));
  }, []);
  const showMessage = (message: IMessage, mailbox: string) => {
    dispatch(showMessageDetails(message, mailbox));
  };

  return (
    <div>
      <Table stickyHeader padding="none">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 120 }}>Date</TableCell>
            <TableCell style={{ width: 300 }}>From</TableCell>
            <TableCell>Subject</TableCell>
          </TableRow>
        </TableHead>
        {messages && (
          <TableBody>
            {messages.slice(start, start + 5).map((message) => (
              <TableRow
                key={message.id}
                onClick={() => showMessage(message, mailbox)}
              >
                <TableCell>
                  {new Date(message.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{message.from}</TableCell>
                <TableCell>{message.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <div>
        <button
          onClick={() => {
            start <= messages.length ? setStart(start + 5) : {};
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setStart(start - 5);
          }}
        >
          Previous
        </button>
      </div>
    </div>
  );
};
