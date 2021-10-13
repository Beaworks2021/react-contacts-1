
import { useState } from "react";
import "./App.css";
import Contact from "./component/Contact";
import ContactForms from "./component/ContactForms";

function App() {
  //users state array
  const [contacts, setContacts] = useState([]);

  //function to add new contact
  function addContact(contact) {
    setContacts([...contacts, contact]);
  }

  //function to delete contact
  const handleDeleteContact = (contactId) => {
    const filterContact = contacts.filter((contact) => {
      return contactId !== contact.id;
    });

    setContacts(filterContact);
  };

  //function to edit saved contact
  const handleEditContact = (newContact, contactId) => {
    // change state and map through contact
    setContacts(
      contacts.map((contact) => {
        if (contactId === contact.id) {
          return newContact;
        } else {
          return contact;
        }
      })
    );
  };

  return (
    <div className="app-bg">
      <div id="para">React Contact App</div>
      <ContactForms inputDetail={addContact} />
      <Contact
        details={contacts}
        deleteContact={handleDeleteContact}
        editContact={handleEditContact}
      />
    </div>
  );
}

export default App;