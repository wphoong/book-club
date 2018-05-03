import React from 'react';

const BooksList = (props) => (
	<div>
		{
			props.books.length != 0 ? 
				props.books.map((book) => {
					return (
						<div key={book.id}>
							<p>
								{book.name}
							</p>							
						</div>);
				}) : ""
		}
	</div>
);

export default BooksList;