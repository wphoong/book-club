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
		this.setState(() => ({name: ""}));
	};
	render() {
		return (
			<div className="text-center">
				<h1>Add a Book</h1>
				<form onSubmit={this.handleSubmit} >
					<input type="text" 
						autoFocus
						placeholder="Enter Book Name"
						value={this.state.name}
						onChange={this.handleNameChange}
					/>
					<button className="btn btn-primary" type="submit">Add Book</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddBook: (book) => dispatch(startAddBook(book))
});


export default connect(undefined, mapDispatchToProps)(AddBookComponent);