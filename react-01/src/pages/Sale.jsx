import React from 'react';
import './css/Sale.css';
import ShoppingBag from "../images/shoppingbag.png";
import SoccerBall from "../images/soccer-ball.png";
import AirFryer from "../images/airfryer.png";
import Brita from "../images/brita.png";
import Table from "../images/table.png";
import Backpack from "../images/backpack.png";

function Sale() {
  return (
    <>
      <main>
        <h1 className="section-title page-title">Sale!</h1>
        
        <div className="flex-container">
          <section className="col1of3">
            <img src={ShoppingBag} alt="Shopping Bag" />
          </section>
          <section className="col1of3">
            <div className="container-text">
              <h3>Franklin Sports All Weather Youth Size 3 Soccer Ball</h3>
              <h3>$5.99 reg $9.99</h3>
              <p>Inspire young athletes with a durable and high-quality youth soccer ball, designed for optimal control, fun, and skill development on the field!</p>
            </div>
          </section>
          <section className="col1of3">
            <img className="item-images" src={SoccerBall} alt="Soccer Ball" />
          </section>
        </div>

        <div className="flex-container">
          <section className="col1of3">
            <img src={ShoppingBag} alt="Shopping Bag" />
          </section>
          <section className="col1of3">
            <div className="container-text">
              <h3>Gourmia 3qt Digital Window Air Fryer</h3>
              <h3>$24.99 reg $39.99</h3>
              <p>Cook crispy, delicious meals with little to no oil using an air fryer, the fast and healthy way to enjoy your favorite fried foods!</p>
            </div>
          </section>
          <section className="col1of3">
            <img src={AirFryer} alt="Air Fryer" />
          </section>
        </div>

        <div className="flex-container">
          <section className="col1of3">
            <img src={ShoppingBag} alt="Shopping Bag" />
          </section>
          <section className="col1of3">
            <div className="container-text">
              <h3>Brita Water Filter 6-Cup Denali Water Pitcher</h3>
              <h3>$14.99 reg $24.99</h3>
              <p>Enjoy crisp, clean, and refreshing water every day with a Brita filter, reducing impurities and saving money on bottled water.</p>
            </div>
          </section>
          <section className="col1of3">
            <img src={Brita} alt="Brita Water Filter" />
          </section>
        </div>

        <div className="flex-container">
          <section className="col1of3">
            <img src={ShoppingBag} alt="Shopping Bag" />
          </section>
          <section className="col1of3">
            <div className="container-text">
              <h3>38" Vintage Storage Sideboard Buffet Accent Cabinet</h3>
              <h3>$113.99 reg $189.99</h3>
              <p>Upgrade your space with this stylish and spacious dresser, offering ample storage and a sleek design to keep your room organized and elegant.</p>
            </div>
          </section>
          <section className="col1of3">
            <img src={Table} alt="Vintage Storage Sideboard" />
          </section>
        </div>

        <div className="flex-container">
          <section className="col1of3">
            <img src={ShoppingBag} alt="Shopping Bag" />
          </section>
          <section className="col1of3">
            <div className="container-text">
              <h3>Blogilates Ultimate Athletic Trainer Backpack</h3>
              <h3>$17.99 reg $29.99</h3>
              <p>Gear up for any adventure with a durable and stylish athletic backpack, designed for comfort, organization, and on-the-go performance!</p>
            </div>
          </section>
          <section className="col1of3">
            <img src={Backpack} alt="Athletic Trainer Backpack" />
          </section>
        </div>
      </main>
    </>
  );
}

export default Sale;
