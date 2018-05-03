import uuid from 'uuid';
import database from '../firebase/firebase.js';

export const addBook = (book) => ({
	type: "ADD_BOOK",
	book
});

export const startAddBook = (bookData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const { name = "" } = bookData;
		const book = { name, uid };

		return database.ref('books').push(book).then((ref) => {
			dispatch(addBook({
				id: ref.key,
				...book
			}));
		});
	}
};

export const removeBook = ({id} = {}) => ({
	type: "REMOVE_BOOK",
	id
});

export const startRemoveBook = ({id} = {}) => {
	return (dispatch) => {
		return database.ref(`books/${id}`).remove().then(() => {
			dispatch(removeBook({id}));
		});
	};
};

export const setBooks = (books) => ({
	type: "SET_BOOKS",
	books
});

export const startSetBooks = () => {
	return (dispatch) => {
		return database.ref('books').once('value').then((snapshot) => {
			const books = [];

			snapshot.forEach((childSnapshot) => {
				books.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				});				
			});
			dispatch(setBooks(books));
		});
	};
};