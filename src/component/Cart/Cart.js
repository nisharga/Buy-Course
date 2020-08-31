import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.val
    const price = cart.reduce((total, prd) => total + prd.cost, 0);
    let shipping = 10;
    if(price == 0){
        shipping = 0;
    }
    let grandTotal = price + shipping;
    return (
        <div>
           <h2 className="shopping-cart"><b>Shopping Cart</b></h2> 
            <h3>Total Order: {cart.length}</h3> 
            <h3>Price: {price}</h3> 
            <h3>Shipping: {shipping}</h3> 
            <h3 className="grand">Total Amount: {grandTotal}</h3>
            <button className="btn btn-block btn-secondary">Check Out</button>
        </div>
    );
};

export default Cart;