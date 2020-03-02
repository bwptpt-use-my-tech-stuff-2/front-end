<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function ItemsListed() {
  const [itemInfo, setItemInfo] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
    .get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff')
    .then(response => {
      setItemInfo(response);
        console.log(itemInfo);
    })
    .catch(error => {
      console.log('Error!', error)
    })
  }, []);

return (
    <div>
      <section className='item-list'></section>
        <h1> Discover Products</h1>
          <div>
          <p>Image 1</p>
        </div>
        <div>
          <p>Image 2</p>
        </div>
        <div>
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
      
    </div>
  );
}
=======
import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
export default function ItemsListed() {
	const [itemInfo, setItemInfo] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get('https://ls-bwptpt-use-my-tech-stuff-2.herokuapp.com/api/stuff')
			.then(response => {
				setItemInfo(response);
				console.log(itemInfo);
			})
			.catch(error => {
				console.log('Error!', error);
			});
	}, []);
	return (
		<div>
			<section className='item-list'></section>
			<h1> Discover Products</h1>
			<div>
				<p>Image 1</p>
			</div>
			<div>
				<p>Image 2</p>
			</div>
			<div>
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
		</div>
	);
}
>>>>>>> e8d0a7f3a183accb8bf399d83b0b26420926f184
