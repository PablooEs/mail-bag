import * as React from "react";
import { IRootState } from "../code/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "./BaseLayout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as IMAPCall from "../code/IMAP";

export const ListMessages: React.FC = () => {
  const viewMessages = (state: IRootState) => state.state.messages;
  const messages = useSelector(viewMessages);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const IMAPWorker: IMAPCall.Worker = new IMAPCall.Worker();
    async function listMessages() {
      const listedMessages = await IMAPWorker.listMessages("INBOX");
      dispatch({ type: "LIST_MESSAGES", payload: listedMessages });
    }
    listMessages();
  }, []);

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
            {messages.map((message) => (
              <TableRow key={message.id}>
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
    </div>
  );
};
