import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function ItemsListed() {
	const [itemInfo, setItemInfo] = useState([]);
	const camera = []
	const tv = []
	const instrument = []
	const party = []
	const other = []
	
	useEffect(() => {
		axiosWithAuth()
			.get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff')
			.then(response => {
				setItemInfo(response.data);
				// console.log(itemInfo);
				for (let i = 0; i < response.data.length; i++) {
					if (response.data[i].category_id === 1) {
						camera.push(response.data[i])
						console.log('camera', camera)						
					}
					if (response.data[i].category_id === 2) {
						tv.push(response.data[i])
						console.log('tv', tv)						
					}
					if (response.data[i].category_id === 3) {
						instrument.push(response.data[i])
						console.log('instrument', instrument)						
					}
					if (response.data[i].category_id === 4) {
						party.push(response.data[i])
						console.log('party', party)						
					}
					if (response.data[i].category_id === 5) {
						other.push(response.data[i])
						console.log('other', other)						
					}
				}
			})
			.catch(error => {
				console.log('Error!', error);
			});
	}, []);

	return (
		<div>
			<section className='item-list'>
				<h1> Discover Products</h1>
					<div className='camera'>
						<p>Image 1</p>
						{console.log(camera)}
					</div>
					<div className='entertainment'>
						<p>Image 2</p>
					</div>
					<div className='party'>
						<p>Image 3</p>
					</div>
					<div>
						<p>Image 4</p>
					</div>
					<div>
						<p>Image 5</p>
					</div>
					<div>
						<p>Image 6</p>
					</div>
			</section>
		</div>
	);
}
