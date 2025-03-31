import React from 'react';
import './css/Home.css';
import Tree from '../components/Tree';
import Carousel from "../images/carousel-img.png"
import BestNewLooks from "../images/best-new-looks.png"

function Home() {
  return (
    <>
      <main>
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
            Elevate your wardrobe with the freshest fashion trends of the season! Our Best New Looks collection is curated to keep you ahead of the curve, blending timeless elegance with modern flair. From effortlessly chic casual wear to statement pieces that turn heads, each item is designed with premium fabrics, bold colors, and flattering fits. Whether you're dressing up for a night out, refreshing your everyday essentials, or making a power move at work, we’ve got the perfect styles to match your vibe. Don't just follow the trends—set them. Shop now and redefine your look with confidence!
            </p>
            <p>
            And the best part? Our Best New Looks aren’t just about style—they’re about versatility and comfort, too. Each piece is thoughtfully designed to mix and match effortlessly, giving you endless outfit possibilities with just a few key staples. Layer up for a cozy, laid-back vibe or accessorize to make a bold fashion statement—the choice is yours! Plus, with exclusive seasonal discounts and limited-edition drops, now is the perfect time to upgrade your wardrobe. Don’t wait—refresh your style today and turn every sidewalk into your personal runway!
            </p>
          </section>
        </div>
      </main>

      <footer id="footer">
        <p>&copy; Behnke's Goods - Cade Behnke</p>
      </footer>
    </>
  );
}

export default Home;
