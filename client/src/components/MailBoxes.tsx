import * as React from "react";
import { IMailbox } from "../code/IMAP";
import * as IMAP from "../code/IMAP";

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
      {mailBoxes.map((mail) => (
        <div>
          <p>{mail.name}</p>
          <p>{mail.path}</p>
        </div>
      ))}
    </div>
  );
};
