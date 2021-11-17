import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInput from "../component/UserInput";
import UserList from "../component/UserList";
import { getAllUsers } from "../actions/userActions";
import { signOut } from "../actions/authActions";
import { connect } from "react-redux";

// import FuncUserForm from './component/FuncUserForm';
// import FuncUserList from './component/FuncUserList';

function Home(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
          props.getAllUsers();
      }, []);
    // function AddUser(user) {
    //   setUsers([...users, user]);
    // }
  
    //function to delete a user
    function delectUser(userId) {
      //loops through the users state and removes the user with the same id
      const filteredList = users.filter((user) => {
        return userId !== user.id;
      });
  
     
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
          <button onClick={() => props.signOut()}>Sign out</button>
            <UserInput/>
            <UserList delectUser={delectUser} editUser={editUser} />
          </div>
        </div>
      </>
    );
  }

const mapDispatch = {
  signOut, getAllUsers
};



export default connect(null, mapDispatch)(Home);