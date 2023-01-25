import React from 'react';
import '@styles/ShoppinCartItem.scss';

const ShoppingCartItem = () => {
  return (
    <div className="ShoppingCartItem">
        <figure>
            <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </figure>
        <p>Bike</p>
        <p>$200,00</p>
    </div>
  )
}

export default ShoppingCartItem