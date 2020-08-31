import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    let alltotal = cart.reduce((cart, prd) => cart + prd.population, 0)
    console.log('alltotal is:', alltotal)
    return (
        <div>
            <h1>This is Cart.js: {cart.length}</h1>
            <p>Population: {alltotal}</p>
        </div>
    );
};

export default Cart;