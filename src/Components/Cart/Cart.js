import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    return (
        <div>
            <h4 className='order-summary'>Order Summary</h4>
            

            <div className='selected-product-info-container'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:</p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <h6>Grand Total:</h6>
            </div>
        </div>
    );
};

export default Cart;