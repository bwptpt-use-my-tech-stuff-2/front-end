import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import UserAdd from './Components/AddUser';
import AddItem from './Components/AddItem';
import ItemsListed from './Components/ItemsListed';
import ProfilePage from './Components/ProfilePage';
import './App.css';
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
		<div className='App'>
			<h1> USE MY TECH STUFF </h1>
			<Router>
				<nav className='navbar'>
					<Link to='/'> Home </Link>

					<Link to='/addItem'> AddItem</Link>

					<Link to='/Search'> Search Item</Link>

					<Link to='/ProfilePage'> ProfilePage</Link>
				</nav>
				<Route exact path='/' component={ItemsListed} />
				{/* <ItemsListed/> */}
				<Route exact path='/addItem' component={AddItem} />

				<Route exact path='/ProfilePage' component={ProfilePage} />
				{/* <Route exact path ="/Search" component ={SearchItem}/> */}
			</Router>
		</div>
		// </UserContext.provider>
		// </RenterContext.provider>
	);
}

export default App;
