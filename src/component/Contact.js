import React from "react";
import ContactList from "./ContactList";
import "../App.css";

function Contact(props) {
  const contacts = props.details;

  return contacts.map((contact, index) => {
    return (
        <div key={index} className="list-box">
          <ContactList
            contact={contact}
            key={contact.id}
            deleteContact={props.deleteContact}
            editContact={props.editContact}
          />
        </div>
    );
  });
}

export default Contact;