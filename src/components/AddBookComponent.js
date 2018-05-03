import React from 'react';
import { connect } from 'react-redux';
import { startAddBook } from "../actions/books.js";

class AddBookComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: ""
		};
	}
	handleNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	};
	handleSubmit = (e) => {
		e.preventDefault();
		
		this.props.startAddBook({name: this.state.name});
		// this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<h1>this is my add book component</h1>
				<form onSubmit={this.handleSubmit} >
					<input type="text" 
						autoFocus
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
					<button type="submit">Add Book</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddBook: (book) => dispatch(startAddBook(book))
});


export default connect(undefined, mapDispatchToProps)(AddBookComponent);