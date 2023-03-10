import React from 'react';
import Order from '@components/Order';
import '@styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className="Checkout">
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <Order />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout