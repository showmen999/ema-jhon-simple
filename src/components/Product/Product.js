import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    //  console.log(props);
    const { name, seller, price, stock } = props.product;
    // console.log(props.product.features);
    // const features = props.product.features;

    return (
        <div className=' single-product-container'>
            <div className="img-container">
                <img src={props.product.img} alt="" /> 
            </div>
            <div className="product-details-container">
                <h3>{name}</h3>
                <div className="info-container">
                    <div className="side-info-part">
                        <p>By: {seller}</p>
                        <p>Price: {price}</p>
                        <p>Only {stock} items left-order soon</p>
                        <button className="button" onClick={() => props.handleAddToCart(props.product)}>
                             <FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
                    </div>
                    <div className="features-container">
                        <h4>features...</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;