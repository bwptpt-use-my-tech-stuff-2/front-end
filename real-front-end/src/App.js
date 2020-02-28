import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

// Utils
import PrivateRoute from './utils/privateRoute';

// Components
import SignUp from './Components/signUp';
import Login from './Components/login';
import AddItem from './Components/AddItem';
import ItemsListed from './Components/ItemsListed';
import ProfilePage from './Components/ProfilePage';
import MyListing from './Components/MyListing';

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
		// </UserContext.provider>
		// </RenterContext.provider>

		<Router>
			<Switch>
				<div className='App'>
					<nav className='navbar'>
						<Link to='/'> Home </Link>

						<Link to='/addItem'> AddItem</Link>

						<Link to='/Search'> Search Item</Link>

						<Link to='/ProfilePage'> ProfilePage</Link>
					</nav>
					<Route exact path='/login' component={Login} />
					<Route exact path='/addItem' component={AddItem} />
					<Route exact path='/register' component={SignUp} />
					<Route exact path='/itemList' component={ItemsListed} />
					<PrivateRoute>
						<Route path='/secure' component={ProfilePage} />
					</PrivateRoute>
				</div>
			</Switch>
		</Router>
	);
}

export default App;
