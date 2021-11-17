import User from "./User";
import { connect } from "react-redux";

function UserList(props) {
  const users = props.users;
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <User
              user={user}
              key={user.id}
              delectUser={props.delectUser}
              editUser={props.editUser}
            />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

export default connect(mapStateToProps)(UserList);
