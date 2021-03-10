import * as React from "react";
import { IMailbox } from "../code/IMAP";
import * as IMAP from "../code/IMAP";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";

export const MailBoxes: React.FC = () => {
  const [mailBoxes, setMailBoxes] = React.useState<IMailbox[]>([]);
  React.useEffect(() => {
    const imapWorker: IMAP.Worker = new IMAP.Worker();
    async function listContacts() {
      const listedContacts = await imapWorker.listMailboxes();
      setMailBoxes(listedContacts);
    }
    listContacts();
  }, []);

  return (
    <div>
      <List>
        {mailBoxes.map((mail) => (
          <>
            <Chip
              label={`${mail.name}`}
              style={{ width: 200, marginBottom: 10 }}
            />
          </>
        ))}
      </List>
    </div>
  );
};
