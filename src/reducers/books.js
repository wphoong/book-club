const booksReducerDefaultState = [];

const booksReducer = (state = booksReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_BOOK":
			return [
				...state,
				action.book
			];
		case "REMOVE_BOOK":
			return state.filter(({id}) => id !== action.id);
		case "SET_BOOKS":
			return action.books;
		default:
			return state;
	}
};

export default booksReducer;