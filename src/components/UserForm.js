import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    //prevents the page from refreshing when form is submitted
    e.preventDefault();

    //object with the new user
    let user = {
      name: name,
      phone: phoneNumber,
      location: location,
     
    };

    //calls the addUser function in App.js
    props.addUser(user);

    //sets name, email state to empty strings
    setName("");
    setPhoneNumber("");
    setLocation("")
   
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <br/>
      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/><br/>
      <input
        type="phone"
        name="phonenumber"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
        <br/>
        <br />
        <input
        type="location"
        name="location"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
        <br/>

        <br/>
        <br/>

        <input type="submit" value="Submit Form"/>
    </form>
  );
}
export default UserForm;
