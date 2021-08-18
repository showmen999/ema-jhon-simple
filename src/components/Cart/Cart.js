import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    const total = cart.reduce((total,pd) => total + pd.price,0)
    let shiping = 0;
    if(total > 49)
    {
        shiping =0;
    } 
    else if(total > 29)
    {
        shiping = 4.99;
    }
    else if(total>0)
    {
        shiping = 12.99;
    }

    const totalBfTax =  total + shiping;

    const tax = (total/10);

    const grandTotal = total + shiping + tax;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h3 className="special">Order Summary</h3>
                <h4 className="special">Items Order:{cart.length}</h4>
                <p>Product Price: {formatNumber(total)}</p>
                <p>Shiping Handling: {shiping}</p>
                <p>Total Before Tax: {formatNumber(totalBfTax)} </p>
                <p>Estimated Tax: {formatNumber(tax)}</p>
                <p><span className="color">Order Total: {formatNumber(grandTotal)}</span> </p>
                <button className="button">Review your order</button>
        </div>
    );
};

export default Cart;