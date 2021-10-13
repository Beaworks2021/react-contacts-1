import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "../App.css";

function ContactForms(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");

  function handleAppContact(e) {
    e.preventDefault();

    if (name && phoneNumber && location) {
      let contact = {
        name: name,
        phoneNumber: phoneNumber,
        location: location,
        id: uuid(),
      };

      props.inputDetail(contact);

      setName("");
      setPhoneNumber("");
      setLocation("");

      let i = 0;
      let txt = "You are welcome, your details are safe with us.";
      let speed = 100;

      let typeWriter = (props) => {
        if (i < txt.length) {
          //   document.getElementById("test").innerHTML += txt.charAt(i);
          //   i++;
          //   setTimeout(typeWriter, speed);

          setText(txt.substring(0, i++));
          setTimeout(typeWriter, speed);
        }
      };

      typeWriter();
    }else {
      alert('Enter something')
    }
  }


  return (
    <div className="formBox">
      <form onSubmit={(e) => handleAppContact(e)}>
        <div className="detail-input">
          <input
            type="text"
            placeholder="Fullname"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button>Submit</button>

        <div id="test">{text}</div>
      </form>
    </div>
  );
}

export default ContactForms;