import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, quantity, price, ratings} = props.product;
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
           <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;