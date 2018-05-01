import React from 'react';
import AddBookComponent from "./AddBookComponent.js";

const DashboardPage = ({startLogin}) => (
	<div>
		<h1>This is my dashboard page</h1>
		<AddBookComponent />
	</div>
);

export default DashboardPage;