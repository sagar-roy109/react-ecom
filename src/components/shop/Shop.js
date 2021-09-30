import React, { useState } from 'react';
import fakeData from "../../fakeData";
import Product from '../Product/Product';
import "../shop/Shop.css";


const Shop = () => {
		let productLimit = fakeData.slice(0, 10);
		console.log(fakeData);
	return (
		<div className="shop-container">
		<Product  products = {productLimit} ></Product>

			<div className= "calculaton-cart">
					<h1>Cart</h1>
			</div>

		</div>

	);
};

export default Shop;
