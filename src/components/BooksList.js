import React from 'react';
import { connect } from 'react-redux';
import { startEditBook } from "../actions/books.js";

class BooksList extends React.Component {
	handleTrade = (e) => {
		const id = e.target.value;
		const updates = {
			tradeStatus: true,
			requestId: this.props.auth.uid
		};
		this.props.startEditBook(id, updates);
		window.location.reload();
	};
	handleCancelTrade = (e) => {
		const id = e.target.value;
		const updates = {
			tradeStatus: false,
			requestId: ""
		};
		this.props.startEditBook(id, updates);
		window.location.reload();
	};
	handleAcceptTrade = (e) => {
		const id = e.target.value;
		const requestId = e.target.dataset.book;
		console.log(id , requestId);
		const updates = {
			tradeStatus: false,
			requestId: "",
			uid: requestId
		};

		this.props.startEditBook(id, updates);
		window.location.reload();
	};
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
				{
					this.props.books.length != 0 ? 
						this.props.books.map((book) => {
							return (
								<div key={book.id} className="col-3">
									<div className="box text-center">
										<p>
											{book.name}
										</p>
										{
											this.props.auth.uid != book.uid && book.tradeStatus != true ?
												<button
													className="btn btn-primary" 
													value={book.id} 
													onClick={this.handleTrade}>
													Request Trade
												</button> : ""
										}
										{
											book.requestId == this.props.auth.uid && book.tradeStatus == true ?
												<button 
													className="btn btn-danger" 
													value={book.id}
													onClick={this.handleCancelTrade}>
													Cancel Trade Request
												</button> : ""
										}
										{
											book.uid == this.props.auth.uid && book.tradeStatus == true ?
												<button
													className="btn btn-info"  
													data-book={book.requestId}
													value={book.id}
													onClick={this.handleAcceptTrade}>
													Accept Trade Request
												</button> : ""
										}
									</div>		
								</div>);
						}) : ""
				}
				</div>
			</div>
		);
	}
} 

const mapStateToProps = (state) =>({
	auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
	startEditBook: (id, updates) => dispatch(startEditBook(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);