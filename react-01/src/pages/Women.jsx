import React from 'react';
import './css/Women.css';

function Women() {
  return (
    <>
      <main>
        <h1 className="section-title page-title">Women</h1>
        <h1>Shop by Category</h1>
        <div className="flex-container">
          <section className="col1of2">
            <img src="images/jeans.png" alt="Jeans" />
            <p>Jeans</p>
          </section>
          <section className="col1of2">
            <img src="images/outerwear.png" alt="Outerwear" />
            <p>Outerwear</p>
          </section>
          <section className="col1of2">
            <img src="images/dress.png" alt="Dresses" />
            <p>Dresses</p>
          </section>
          <section className="col1of2">
            <img src="images/sweater.png" alt="Sweaters" />
            <p>Sweaters</p>
          </section>
          <section className="col1of2">
            <img src="images/pants.png" alt="Pants" />
            <p>Pants</p>
          </section>
          <section className="col1of2">
            <img src="images/pajamas.png" alt="Pajamas" />
            <p>Pajamas</p>
          </section>
        </div>

        <div id="women-products" className="products-container"></div>

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
              <img src="images/stars.png" alt="Five Star Reviews" />
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
