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
				{/* <nav className='navbar'>
					<Link to='/'> Home </Link>

					<Link to='/addItem'> AddItem</Link>

					<Link to='/Search'> Search Item</Link>

					<Link to='/ProfilePage'> ProfilePage</Link>
					<Link to ="/login"> LogIn</Link>
					<Link to ="/register">Signup</Link>
				</nav> */}
				<Route exact path='/' component={ItemsListed} />
				{/* <ItemsListed/> */}
				<Route path='/addItem' component={AddItem} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={SignUp} />
				<Route path='/ProfilePage' component={ProfilePage} />
				{/* <Route exact path ="/Search" component ={SearchItem}/>  */}
				<Route path='/Search' component={ProductRent} />
				<Route path='/ProductPrice' component={ProductPrice} />
				<Route path='/ProductDate' component={ProductDate} />
				<Route path='/ProductThankYou' component={ProductThankYou} />
				<Route path='/listing-options' component={ListingOptions} />
				<Route path='/edit-listing' component={EditListing} />
				<PrivateRoute>
					<Route path='/secure' component={ProfilePage} />
				</PrivateRoute>
			</Router>
		</div>
	);
}

export default App;
