import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '@containers/MyOrder';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/2048px-VisualEditor_-_Icon_-_Menu.svg.png" alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src="https://freesvg.org/img/ethereum-classic-logo.png" alt="logo" className="logo"/>
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="navbar-right">
            <ul>
                <li className="navbar-email" onClick={handleToggle}>
                    khonstantin90@gmial.com
                </li>
                <li 
                    className="navbar-shopping-cart" 
                    onClick={() => setToggleOrders(!toggleOrders)}
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/938px-Shopping_cart_icon.svg.png" alt="shopping cart"/>
                    {state.cart.length > 0?  <div>{state.cart.length}</div> : null}
                </li>
            </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder />}
    </nav>
  )
}

export default Header