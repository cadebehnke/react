import React from 'react';
import WomenProducts from '../components/WomenProducts';
import Jeans from "../images/jeans.png";
import Outerwear from "../images/outerwear.png";
import Dress from "../images/dress.png";
import Sweater from "../images/sweater.png";
import Pants from "../images/pants.png";
import Pajamas from "../images/pajamas.png";
import Stars from "../images/stars.png";

function Women() {
  return (
    <>
      <h1 className="section-title page-title">Women</h1>
      <h1>Shop by Category</h1>
      <div className="flex-container">
        <section className="col1of2">
          <img src={Jeans} alt="Jeans" />
          <p>Jeans</p>
        </section>
        <section className="col1of2">
          <img src={Outerwear} alt="Outerwear" />
          <p>Outerwear</p>
        </section>
        <section className="col1of2">
          <img src={Dress} alt="Dresses" />
          <p>Dresses</p>
        </section>
        <section className="col1of2">
          <img src={Sweater} alt="Sweaters" />
          <p>Sweaters</p>
        </section>
        <section className="col1of2">
          <img src={Pants} alt="Pants" />
          <p>Pants</p>
        </section>
        <section className="col1of2">
          <img src={Pajamas} alt="Pajamas" />
          <p>Pajamas</p>
        </section>
      </div>

      <WomenProducts />

      <div className="flex-container">
        <section className="col1of2">
          <section className="container-text">
            <h3>Ethically Sourced</h3>
            <p>
              We take pride in ethically sourcing all our clothing, ensuring that every step of the process supports fair wages, safe working conditions, and sustainable materials.
            </p>
            <h3>Giving Back</h3>
            <p>
              Beyond our commitment to ethical fashion, we are dedicated to giving back to the community through charitable initiatives and local partnerships.
            </p>
          </section>
        </section>

        <section className="col1of2">
          <section className="container-text">
            <p>
              <b>User: Olivia Martinez - </b>I am absolutely in love with the quality of this clothing! The fabric is so soft yet feels incredibly durable.
            </p>
          </section>
          <section className="container-text">
            <p>
              <b>User: Emma Reynolds - </b>This is hands down the best clothing purchase I’ve made in a long time! The material is lightweight and breathable.
            </p>
          </section>
          <section>
            <h3>Five Star Reviews!</h3>
            <img src={Stars} alt="Five Star Reviews" />
          </section>
        </section>
      </div>
    </>
  );
}

export default Women;