import React from 'react';
import { connect } from 'react-redux';
import AddBookComponent from "./AddBookComponent.js";

const DashboardPage = (props) => (
	<div>
		<h1>This is my dashboard page</h1>
		<AddBookComponent />
		<div>
			{
				props.books.length != 0 ?
					props.books.map(({id, name, uid}) => {
						if (uid == props.auth.uid) {
							return <p key={id}>{name}</p>;
							}
					}) : "No Books"
			}
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	auth: state.auth,
	books: state.books
});

export default connect(mapStateToProps)(DashboardPage);