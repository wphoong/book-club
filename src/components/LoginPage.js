import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth.js';
import { firebase } from '../firebase/firebase.js';

class LoginPage extends React.Component {
	handleLogin = () => {
		this.props.startLogin();
		this.props.history.push("/dashboard");
	};
	componentWillMount = () => {
		const user = firebase.auth().currentUser;
		if (user) {
		  this.props.history.push("/dashboard");
		}
	};
	render() {
		return (
			<div>
				<h1>Log In</h1>
				<button onClick={this.handleLogin}>Login</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);