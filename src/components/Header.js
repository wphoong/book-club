import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogOut, logout } from "../actions/auth.js";

const Header = (props) => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<Link to="/">
					<h1 className="navbar-brand mb-0 h1">Home</h1>
				</Link>
				{
					props.isAuthenticated ? 
						(<div className="">
								<Link to="/dashboard" className="btn">Dashboard</Link>
								<Link to="/accountsettings" className="btn">Account Settings</Link>
								<button 
									className="btn"
									onClick={props.startLogOut}>
									Log Out
								</button>
							</div>) : (
						<div>
							<Link to="/login" className="btn">Login</Link>
						</div>)					
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