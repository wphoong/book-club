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
			<div>
				<h1>THIS IS MY HOMEPAGE COMPONENT</h1>
				<button onClick={this.handleShowBooks}>Show Books</button>
				<BooksList books={this.state.books} />
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