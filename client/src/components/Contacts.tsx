import * as React from "react";
import * as ContactsCall from "../code/Contacts";
import { IContact } from "../code/Contacts";

export const Contacts: React.FC = () => {
  const [contacts, setContacts] = React.useState<IContact[]>([]);
  React.useEffect(() => {
    const contactsWorker: ContactsCall.Worker = new ContactsCall.Worker();
    async function listContacts() {
      const listedContacts = await contactsWorker.listContacts();
      setContacts(listedContacts);
    }
    listContacts();
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <h1>{contact.name}</h1>
      ))}
    </div>
  );
};
