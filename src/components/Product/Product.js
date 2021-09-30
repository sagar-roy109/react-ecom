import React from 'react';
import "../Product/Product.css";

const Product = (props) => {
		let products = props.products;
		console.log(props.product);
	return (
		<div className="product-container">
			{
				products.map(pd=> <p>{pd.name}</p>)
			}
		</div>
	);
};

export default Product;
