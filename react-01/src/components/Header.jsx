import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return(
        <header>
            <header id="header">
        40% OFF THE WHOLE STORE FOR VALENTINE'S DAY!
      </header>
      <div id="top-bar">
        <div id="logo-container">
          <img src="images/Behnke's-Goods.png" alt="Behnke's Goods Logo" id="store-logo" />
          <div id="store-name">Behnke's Goods</div>
        </div>

        <div id="search-bar">
          <input type="text" placeholder="Search" />
        </div>

        <div id="icons">
          <a href="#" className="icon">
            <img src="images/sign-in.png" alt="Sign In" />
            <span>Sign In</span>
          </a>
          <a href="#" className="icon">
            <img src="images/cart.png" alt="Cart" />
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