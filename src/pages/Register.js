import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithGoogle,
} from "../actions/authActions";

function Register(props) {
  if (!props.auth.isLoaded) return null;
  if (!props.auth.isEmpty) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.createUser(email, password);
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input type="submit" />
        <Link to="/login">Already have an account? Sign in</Link>
      </form>

      <button onClick={props.signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

const mapDispatch = {
  createUser: createUserWithEmailAndPassword,
  signInWithGoogle,
};

const mapState = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapState, mapDispatch)(Register);