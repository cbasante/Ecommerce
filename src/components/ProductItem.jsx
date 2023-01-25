import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/add-to-cart.png';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  }

  return (
    <div class="ProductItem">
        <img src={product.images[0]} alt={product.title} />
        <div class="product-info">
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product)}>
                <img src={addToCartImage} alt=""/>
            </figure>
        </div>  
    </div>
  )
}

export default ProductItem