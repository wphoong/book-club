import React from 'react';
import { firebase } from "../firebase/firebase.js";
import { connect } from "react-redux";
import { startEditUser } from "../actions/user.js";

class AccountSettings extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fullName: props.user ? props.user.fullName : "",
			city: props.user ? props.user.city : "",
			state: props.user ? props.user.state : ""
		}
	}
	handleName = (e) => {
		const fullName = e.target.value;
		this.setState(() => ({ fullName }));
	};
	handleCity = (e) => {
		const city = e.target.value;
		this.setState(() => ({ city }));
	};
	handleState = (e) => {
		const state = e.target.value;
		this.setState(() => ({ state }));
	};
	handleSubmit = (e) => {
		e.preventDefault();

		this.props.startEditUser({
			fullName: this.state.fullName,
			city: this.state.city,
			state: this.state.state
		});

	};
	render() {
		return (
			<div>
				<h1>Update Profile</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
					<input 
						type="text" 
						placeholder="Full Name"
						value={this.state.fullName}
						onChange={this.handleName}
						/>
					<input 
						type="text" 
						placeholder="City" 
						value={this.state.city}
						onChange={this.handleCity}
						/>
					<input 
						type="text" 
						placeholder="State" 
						value={this.state.state}
						onChange={this.handleState}
						/>
					<button type="submit">Save</button>
					</div>
				</form>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	user: state.users
});

const mapDispatchToProps = (dispatch) => ({
	startEditUser: (updates) => dispatch(startEditUser(updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);