import React, { Component } from "react";
import "../App.css";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      gen: this.props.user.gen,
    };
  }

handleSave(e) {
    e.preventDefault();

    let editUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
      id: this.props.user.id,
    };

    this.props.editUser(editUser, this.props.user.id);
    this.props.toggleModal();
    //   this.props.addUser(user);

    //   this.setState({
    //   name: "",
    //   email: "",
    //   gen: ""
    // });
  };

  render() {
    return (
      <div className="form-container">
        <form>
          <div className="name">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Enter your Fullname"
            />
          </div>

          <div className="email">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <input
              type="text"
              name="gen"
              value={this.state.gen}
              onChange={(e) => this.setState({ gen: e.target.value })}
              placeholder="Enter your Gen"
            />
          </div>

          <button onClick={(e) => this.handleSave(e)}>save</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
