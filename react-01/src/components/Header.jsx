import "./css/Header.css";
import BehnkeGoods from "../images/Behnke's-Goods.png";
import SignIn from "../images/sign-in.png";
import Cart from "../images/cart.png";

function Header() {
  return (
    <header id="header">
      40% OFF THE WHOLE STORE FOR VALENTINE'S DAY!

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
    </header>
  );
}

export default Header;
