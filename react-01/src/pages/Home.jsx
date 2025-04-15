import React from 'react';
import './css/Home.css';
import Carousel from "../images/carousel-img.png";
import BestNewLooks from "../images/best-new-looks.png";

function Home() {
  return (
    <>
      <div className="carousel-img-holder">
        <div className="carousel-img">
          <img src={Carousel} alt="Carousel" />
        </div>
      </div>

      <div className="flex-container">
        <section className="col1of2">
          <h1 className="section-title">Best New Looks</h1>
          <img src={BestNewLooks} alt="Best New Looks" />
        </section>

        <section className="col1of2 best-new-looks-text">
          <p>
            Elevate your wardrobe with the freshest fashion trends of the season! Our Best New Looks collection is curated to keep you ahead of the curve, blending timeless elegance with modern flair. From effortlessly chic casual wear to statement pieces that turn heads, each item is designed with premium fabrics, bold colors, and flattering fits.
          </p>
          <p>
            And the best part? Our Best New Looks aren’t just about style—they’re about versatility and comfort, too. Each piece is thoughtfully designed to mix and match effortlessly, giving you endless outfit possibilities with just a few key staples.
          </p>
        </section>
      </div>
    </>
  );
}

export default Home;
