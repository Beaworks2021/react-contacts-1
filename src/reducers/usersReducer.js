const initialState = {
    users: [],
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {...state, users: [...state.users, action.payload]}

        case "DELETE_USER":
          const filteredUsers = state.users.filter(
            (user) => user.id !== action.payload
          );
          return { ...state, users: filteredUsers };
    
        case "EDIT_USER":
          const updatedUsers = state.users.map((user) => {
            if (user.id === action.payload.userId) {
              return action.payload.updatedUser;
            }
            return user;
          });
    
          return { ...state, users: updatedUsers };

          case "SET_ALL_USERS":
			return { users: action.payload };
      
      default:
        return state;
    }
  };
  
  export default usersReducer;
  