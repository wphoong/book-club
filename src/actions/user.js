import database from "../firebase/firebase.js";

export const addUser = (user) => ({
	type: "ADD_USER",
	user
});

export const startAddUser = (userData = {}) => {
	return (dispatch, getState) => {
		const userId = getState().auth.uid;
		const { 
			fullName = "",
			city = "",
			state = ""
		} = userData;

		const userInfo = { fullName, city, state };
		console.log("userInfo ", userInfo);

		return database.ref(`users/${userId}`).set(userInfo).then(() => {
			dispatch(addUser({
				id: userId,
				...userInfo
			}));
		});
	};
};

export const editUser = (updates) => ({
	type: "EDIT_USER",
	updates
});

export const startEditUser = (updates) => {
	return (dispatch, getState) => {
		const userId = getState().auth.uid;

		return database.ref(`users/${userId}`).update(updates).then(() => {
			dispatch(editUser(updates));
		});
	};
};