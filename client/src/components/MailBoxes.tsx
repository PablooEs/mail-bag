import * as React from "react";
import { IMailbox } from "../code/IMAP";
import * as IMAP from "../code/IMAP";
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";
import { useDispatch } from "react-redux";
import { listMessages, setMailBox } from "../code/redux/actions/actions";

export const MailBoxes: React.FC = () => {
  const [mailBoxes, setMailBoxes] = React.useState<IMailbox[]>([]);
  React.useEffect(() => {
    const imapWorker: IMAP.Worker = new IMAP.Worker();
    async function listMailBoxes() {
      const listMailBoxes = await imapWorker.listMailboxes();
      setMailBoxes(listMailBoxes);
    }
    listMailBoxes();
  }, []);
  const dispatch = useDispatch();

  const handleClick = (path: string) => {
    dispatch(listMessages(path));
  };

  return (
    <div>
      <List>
        {mailBoxes.map((mail) => (
          <>
            <Chip
              onClick={() => handleClick(mail.path)}
              label={`${mail.name}`}
              style={{ width: 200, marginBottom: 10 }}
            />
          </>
        ))}
      </List>
    </div>
  );
};
