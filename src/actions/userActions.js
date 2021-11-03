//export const ADD_USER = "ADD_USER";

export const addUser = (user) => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.add(user)
			.then(() => {
				dispatch({
					type: "ADD_USER",
					payload: user,
				});
			});
	};

	// console.log("addUser", user);
	// //user.id = Math.random().toString();
};

export const deleteUser = (userId) => {
	return {
		type: "DELETE_USER",
		payload: userId,
	};
};

export const editUser = (userId, updatedUser) => {
	return {
		type: "EDIT_USER",
		payload: { userId, updatedUser },
	};
};

export const getAllUsers = () => {
	return (dispatch, state, { getFirestore }) => {
		getFirestore()
			.collection("users")
			.onSnapshot(
				(snapshot) => {
					let users = [];
					snapshot.forEach((doc) => {
						users.push(doc.data());
					});
					console.log(users);
					dispatch({ type: "SET_ALL_USERS", payload: users });
				},
				(error) => {}
			);
	};
};