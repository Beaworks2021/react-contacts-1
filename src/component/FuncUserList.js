import User from "./User";
//import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

function FuncUserList(props) {
   
    const users = props.data
    return (
            users.map((user, index)=>{
                return(
                    <div className="list">
                        <div key={index}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Gen: {user.gen}</p>
                    </div>
                    </div>
                )
            })
        
    )
}


const mapStateToProps = (state) => {
    return {
      users: state.users.users,
    };
  };
  
  export default connect(mapStateToProps)(FuncUserList);
