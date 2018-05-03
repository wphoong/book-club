import React from 'react';
import { connect } from 'react-redux';
import AddBookComponent from "./AddBookComponent.js";
import BooksList from "./BooksList.js";

const DashboardPage = (props) => (
	<div className="container text-center">
		<h1>My Dashboard</h1>
		<AddBookComponent />
		<div>
			<h3>Your Books</h3>
			<BooksList books={props.books} />
		</div>
		<div>
			<h3>Your Book Trade Requests</h3>
			<BooksList books={props.requestOut} />
		</div>
		<div>
			<h3>Book Trade Requests from others</h3>
			<BooksList books={props.requestIn} />
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	auth: state.auth,
	books: state.books.filter(({uid}) => uid == state.auth.uid),
	requestOut: state.books.filter(({requestId}) => requestId == state.auth.uid),
	requestIn: state.books.filter(({uid, tradeStatus}) => uid == state.auth.uid && tradeStatus == true)
});

export default connect(mapStateToProps)(DashboardPage);