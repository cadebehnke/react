import "./css/Header.css";
import Navigation from "./Navigation";
import BehnkeGoods from "../images/Behnke's-Goods.png";
import SignIn from "../images/sign-in.png";
import Cart from "../images/cart.png";

function Header() {
    return(
        <header>
            <header id="header">
        40% OFF THE WHOLE STORE FOR VALENTINE'S DAY!
      </header>
      <div id="top-bar">
        <div id="logo-container">
          <img src={BehnkeGoods} alt="Behnke's Goods Logo" id="store-logo" />
          <div id="store-name">Behnke's Goods</div>
        </div>

        <div id="search-bar">
          <input type="text" placeholder="Search" />
        </div>

        <div id="icons">
          <a href="#" className="icon">
            <img src={SignIn} alt="Sign In" />
            <span>Sign In</span>
          </a>
          <a href="#" className="icon">
            <img src={Cart} alt="Cart" />
            <span>Cart</span>
          </a>
        </div>
      </div>

      <nav id="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/sale">Sale</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
        </ul>
      </nav>
      <hr />
        </header>
    );
};

export default Header;