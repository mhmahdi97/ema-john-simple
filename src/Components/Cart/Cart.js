import React, { Children } from 'react';
import './Cart.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {
    const {cart, handleClearCart, children} = props;
    console.log(props)

    // console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price*product.quantity;
        totalShipping = totalShipping + product.shipping;
    };
    let tax = totalPrice*7/100;
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div>
            <h4 className='order-summary'>Order Summary</h4>
            

            <div className='selected-product-info-container'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt}/>
                    {/* className='delete-icon' */}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;