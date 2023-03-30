import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   const handleAddToCart = props.handleAddToCart
    const {img, name, seller, price, ratings, id} = props.product;
    return (
        <div className='product'>
           <div className='product-img-container'>
            <img src={img} alt="" />
           </div>
           <div className='product-description-container'>
           <h6 className='product-title'>{name}</h6>
           <h6 className='product-price'>Price: ${price}</h6>
           <p className='product-manufacturer'>Manufacturer: {seller}</p>
           <p className='product-ratings'>Rating: {ratings} Stars</p>
           </div>
           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};

export default Product;