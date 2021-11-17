import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, signInWithGoogle } from "../actions/authActions";

function Login(props) {
  if (!props.auth.isLoaded) return null;
  if (!props.auth.isEmpty) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.login(email, password);
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <input type="submit" />
        <Link to="/register">Don't have an account? Sign up</Link>
      </form>

      <button onClick={props.signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

const mapState = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatch = {
  login,
  signInWithGoogle,
};

export default connect(mapState, mapDispatch)(Login);