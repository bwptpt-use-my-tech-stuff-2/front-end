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
import MyListing from './Components/myListing/MyListing';
import EditListing from './Components/myListing/editListing';
import ListingOptions from './Components/myListing/listingOptions';
import ProductRent from './Components/ProductRent';
import ProductPrice from './Components/ProductPrice';
import ProductDate from './Components/ProductDate';
import ProductThankYou from './Components/ProductThankYou';
import Users from './utils/users';
import Navbar from './Components/navbar';

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
			<Router>
				<Switch>
					<Route exact path='/' component={ItemsListed} />
					<Route path='/admin' component={Users} />
					<Route path='/addItem' component={AddItem} />
					<Route path='/edit-listing' component={EditListing} />
					<Route exact path='/login' component={Login} />
					<Route path='/listing-options' component={ListingOptions} />
					<Route path='/ProfilePage' component={ProfilePage} />
					{/* <Route path='/ProductDate' component={ProductDate} /> */}
					<Route path='/ProductPrice' component={ProductPrice} />
					<Route path='/ProductThankYou' component={ProductThankYou} />
					<Route exact path='/register' component={SignUp} />

					<PrivateRoute>
						<Route path='/secure' component={ProfilePage} />
					</PrivateRoute>
				</Switch>
				<Navbar />
			</Router>
		</div>
	);
}

export default App;
