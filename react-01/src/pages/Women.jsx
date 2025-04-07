import React from 'react';
import './css/Women.css';
import Jeans from "../images/jeans.png";
import Outerwear from "../images/outerwear.png";
import Dress from "../images/dress.png";
import Sweater from "../images/sweater.png";
import Pants from "../images/pants.png";
import Pajamas from "../images/pajamas.png";
import Stars from "../images/stars.png";

import WomenProducts from '../components/WomenProducts';

function Women() {
  return (
    <>
      <main>
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
                We take pride in ethically sourcing all our clothing, ensuring that every step of the process supports fair wages, safe working conditions, and sustainable materials. Our fabrics come from responsible sources, including organic cotton and recycled materials, reducing our environmental impact while maintaining high quality. We work closely with manufacturers who share our values, ensuring that every worker is treated with dignity and respect.
              </p>
              <h3>Giving Back</h3>
              <p>
                Beyond our commitment to ethical fashion, we are dedicated to giving back to the community through charitable initiatives and local partnerships. A portion of our profits goes toward programs that provide clothing, education, and essential resources to underserved communities.
              </p>
            </section>
          </section>

          <section className="col1of2">
            <section className="container-text">
              <p>
                <b>User: Olivia Martinez - </b>I am absolutely in love with the quality of this clothing! The fabric is so soft yet feels incredibly durable, and the stitching is flawless. Even after several washes, the colors stay bright, and the fit is just as perfect as the first wear!
              </p>
            </section>
            <section className="container-text">
              <p>
                <b>User: Emma Reynolds - </b>This is hands down the best clothing purchase I’ve made in a long time! The material is lightweight and breathable, making it so comfortable to wear all day. I’ve gotten so many compliments, and I can already tell this piece will be a staple in my wardrobe for years!
              </p>
            </section>
            <section>
              <h3>Five Star Reviews!</h3>
              <img src={Stars} alt="Five Star Reviews" />
            </section>
          </section>
        </div>
      </main>

      <footer id="footer">
        <p>&copy; Behnke's Goods - Cade Behnke</p>
      </footer>
    </>
  );
}

export default Women;
