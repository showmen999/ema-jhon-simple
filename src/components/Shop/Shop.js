import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData)
    const first10 = fakeData.slice(0,10);
    const[products,setProducts] = useState(first10);
    // console.log(first10);
    const[cart,setCart] = useState([]);
    const handleAddToCart = (product) =>
    {
        console.log('handle clicked',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    products.map(pd => <Product 
                        handleAddToCart ={handleAddToCart} 
                        product ={pd}>
                        </Product>)
                }
            </ul>
            </div>
           <div className="cart-container">
                {/* <h3 className="special">Order Summary</h3>
                <h4 className="special">Items Order:{cart.length}</h4>
                <p>Items: </p>
                <p>Shiping Handling: </p>
                <p>Total Before Tax: </p>
                <p>Estimated Tax: </p>
                <p><span className="color">Order Total:</span> </p>
                <button className="button">Review your order</button> */}
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;