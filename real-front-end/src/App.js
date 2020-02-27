import React, { useState } from 'react';
import { RenterContext } from './Context/RenterContext';
import { UserContext } from './Context/UserContext';
import UserForm from './Components/UserForm';
import RenterForm from './Components/RenterForm';
import SignInForm from './Components/SignUpForm';

import './App.css';

function App() {
	const [owner, setOwner] = useState([]);
	const [rentals, setRentals] = useState([]);

	return (
		// <div className='App'>
		// 	<h1> UseMyTech</h1>
		// 	<RenterContext.provider value={{ rentals, setRentals }}>
		// 		<UserContext.provider value={{ owner, setOwner }}>
		// 			<UserForm />
		// 			<RenterForm />
		// 		</UserContext.provider>
		// 	</RenterContext.provider>
		// </div>

		// <RenterContext.provider value={{ rentals, setRentals }}>
		// <UserContext.provider value={{ owner, setOwner }}>
		<div className='App'>
			{/* <UserForm />
			<RenterForm /> */}
			<SignInForm />
		</div>
		// </UserContext.provider>
		// </RenterContext.provider>
	);
}

export default App;
