import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import BehnkesGoods from "./images/Behnke's-Goods.png";
import SignIn from "./images/sign-in.png";
import Cart from "./images/cart.png";

function Layout() {
  return (
    <>
      <header id="header">
        40% OFF THE WHOLE STORE FOR VALENTINE'S DAY!
      </header>

      <div id="top-bar">
        <div id="logo-container">
          <img src={BehnkesGoods} alt="Behnke's Goods Logo" id="store-logo" />
          <div id="store-name">Behnke's Goods</div>
        </div>

        <div id="search-bar">
          <input type="text" placeholder="Search" />
        </div>

        <div id="icons">
          <button className="icon">
            <img src={SignIn} alt="Sign In" />
            <span>Sign In</span>
          </button>
          <button className="icon">
            <img src={Cart} alt="Cart" />
            <span>Cart</span>
          </button>
        </div>
      </div>

      <nav id="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/sale">Sale</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
      </nav>
      <hr />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
