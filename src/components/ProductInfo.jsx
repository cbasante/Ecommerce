import React from 'react';
import '@styles/ProductInfo.scss'

const ProductInfo = () => {
  return (
    <>
        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400" alt="bike"/>
        <div className="ProductInfo">
            <p>$200,00</p>
            <p>Bike</p>
            <p>"Bike" redirects here. For other uses of Bike, see Bike (disambiguation). For other uses of Bicycle, see Bicycle (disambiguation).
                For the butterfly genus, see Bicyclus.</p>
            <button className="primary-button add-to-cart-botton">
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="add to cart"/>
                Add to cart
            </button>
        </div>
    </>
  )
}

export default ProductInfo