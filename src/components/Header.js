import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogOut, logout } from "../actions/auth.js";

const Header = (props) => {
	return (
		<div>
			<nav>
				<Link to="/">
					<h1>Home</h1>
				</Link>
				{
					props.isAuthenticated ? 
						(<div>
							<Link to="/accountsettings">Account Settings</Link>
							<button onClick={props.startLogOut}>
								Log Out
							</button>
						</div>) :
						<Link to="/login">Login</Link>
				}
			</nav>
		</div>
	)
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);