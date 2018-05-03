import React from 'react';
import { startSetBooks } from '../actions/books.js';
import { connect } from 'react-redux';
import BooksList from './BooksList.js';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			books: ""
		}
	}
	handleShowBooks = () => {
		this.setState(() => ({books: this.props.books}));
		console.log(this.props.books);
	};
	componentDidMount = () => {
		this.props.startSetBooks();
	};
	render() {
		return (
			<div className="container-fluid">
			<div className="jumbotron text-center">
				<h1>Book Club</h1>
				<button 
					className="btn btn-success"
					onClick={this.handleShowBooks}>
					Show Books
				</button>
				<br />
				<div className="container">
					<BooksList books={this.state.books} />
				</div>
			</div>
			</div>
		);
	}
} 

const mapStateToProps = (state) => ({
	books: state.books
});

const mapDispatchToProps = (dispatch) => ({
	startSetBooks: () => dispatch(startSetBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);