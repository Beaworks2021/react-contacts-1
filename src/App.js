import React, { useState } from "react";
import UserInput from "./component/UserInput";
import UserList from "./component/UserList";
import "./App.css";
// import FuncUserForm from './component/FuncUserForm';
// import FuncUserList from './component/FuncUserList';

function App() {
  const [users, setUsers] = useState([]);

  // function AddUser(user) {
  //   setUsers([...users, user]);
  // }

  //function to delete a user
  function delectUser(userId) {
    //loops through the users state and removes the user with the same id
    const filteredList = users.filter((user) => {
      return userId !== user.id;
    });

    //sets the users state to the filtered users array
    setUsers(filteredList);
  }

  const editUser = (newUser, userId) => {
    setUsers(
      users.map((user) => {
        if (userId === user.id) {
          return newUser;
        } else {
          return user;
        }
      })
    );
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <UserInput/>
          <UserList delectUser={delectUser} editUser={editUser} />
        </div>
      </div>
    </>
  );
}

export default App;
