import React from 'react';
import './css/Men.css';
import mJeans from "../images/m-jeans.png";
import mTees from "../images/m-tee.png";
import mPants from "../images/m-pants.png";
import mSweater from "../images/m-sweater.png";
import mShirt from "../images/m-shirt.png";
import mCoat from "../images/m-coat.png";
import Stars from "../images/stars.png";

function Men() {
  return (
    <>
      <main>
        <h1 className="section-title page-title">Men</h1>
        <h1>Shop by Category</h1>
        <div className="flex-container">
          <section className="col1of2">
            <img src={mJeans} alt="Jeans" />
            <p>Jeans</p>
          </section>
          <section className="col1of2">
            <img src={mTees} alt="Tees" />
            <p>Tees</p>
          </section>
          <section className="col1of2">
            <img src={mPants} alt="Pants" />
            <p>Pants</p>
          </section>
          <section className="col1of2">
            <img src={mSweater} alt="Sweaters" />
            <p>Sweaters</p>
          </section>
          <section className="col1of2">
            <img src={mShirt} alt="Shirts" />
            <p>Shirts</p>
          </section>
          <section className="col1of2">
            <img src={mCoat} alt="Coats" />
            <p>Coats</p>
          </section>
        </div>

        <div className="flex-container">
          <section className="col1of2">
            <section className="container-text">
              <h3>Ethically Sourced</h3>
              <p>
                We take pride in ethically sourcing all our clothing, ensuring that every step of the process supports fair wages, safe working conditions, and sustainable materials. Our fabrics come from responsible sources, including organic cotton and recycled materials, reducing our environmental impact while maintaining high quality. We work closely with manufacturers who share our values, ensuring that every worker is treated with dignity and respect. When you shop with us, you’re choosing fashion that not only looks good but also does good for people and the planet.
              </p>
              <h3>Giving Back</h3>
              <p>
                Beyond our commitment to ethical fashion, we are dedicated to giving back to the community through charitable initiatives and local partnerships. A portion of our profits goes toward programs that provide clothing, education, and essential resources to underserved communities. We also collaborate with local organizations to support job training and mentorship opportunities, helping individuals build a better future. By shopping with us, you’re not just making a purchase—you’re contributing to a movement that uplifts others and creates lasting change.
              </p>
            </section>
          </section>

          <section className="col1of2">
            <section className="container-text">
              <p>
                <b>User: Sage Alexander - </b>This is easily the best clothing purchase I’ve made in a long time. The material is breathable and comfortable, making it perfect for all-day wear. I’ve received so many compliments, and I can tell this piece will last for years!
              </p>
            </section>
            <section className="container-text">
              <p>
                <b>User: Ben Higdon - </b>I was blown away by the quality of this clothing! The fabric feels incredibly soft yet durable, and the stitching is top-notch. Even after multiple washes, the colors stay vibrant, and the fit remains perfect.
              </p>
            </section>
            <section>
              <h3>Five Star Reviews!</h3>
              <img src={Stars} alt="Five Star Reviews" />
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default Men;
