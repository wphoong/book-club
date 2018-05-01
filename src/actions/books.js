import uuid from 'uuid';

export const addBook = ({name = ""} = {}) => ({
	type: "ADD_BOOK",
	book: {
		id: uuid(),
		name
	}
});

export const removeBook = ({id} = {}) => ({
	type: "REMOVE_BOOK",
	id
});