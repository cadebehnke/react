import React from 'react';
import './css/About.css';
import me2 from "../images/me2.png";

function About() {
  return (
    <>
      <main>
        <div className="flex-container">
          <section className="col1of2">
            <h1 className="section-title">Meet The Owner</h1>
            <h2>Cade Behnke</h2>
            <p>Born: Charlotte, North Carolina</p>
            <p>School: Current Senior at The University of South Carolina</p>
            <img src={me2} alt="Owner" />
            
            <div className="contact-form">
              <h2>Contact Me</h2>
              <form id="contactForm">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
                <p id="responseMessage"></p>
              </form>
            </div>
          </section>

          <section className="col1of2">
            <div className="flex-container container-text">
              <section className="col1of2">
                <h1 className="section-title">History</h1>
              </section>
              <section className="col1of2">
                <p>
                  Behnke's Goods was founded with a passion for bringing high-quality, stylish, and affordable fashion to everyone. What started as a small local shop quickly grew into a go-to destination for trendsetters looking for timeless pieces with a modern touch. Built on a foundation of community, creativity, and craftsmanship, our store continues to evolve while staying true to our mission of delivering excellence in every piece we offer.
                </p>
              </section>
            </div>

            <div className="flex-container container-text">
              <section className="col1of2">
                <p>
                  At Behnke's Goods, our mission is to empower individuals to express themselves through fashion. We believe that style should be accessible, versatile, and reflective of personal confidence, which is why we curate collections that blend comfort, sophistication, and the latest trends. By prioritizing quality materials, ethical sourcing, and exceptional customer service, we strive to create an inclusive shopping experience for all.
                </p>
              </section>
              <section className="col1of2">
                <h1 className="section-title">Mission</h1>
              </section>
            </div>

            <div className="flex-container container-text">
              <section className="col1of2">
                <h1 className="section-title">Future</h1>
              </section>
              <section className="col1of2">
                <p>
                  Looking ahead, Behnke's Goods is committed to expanding our reach and enhancing our offerings with new, innovative designs. We aim to integrate sustainable practices into our production while continuing to deliver high-quality fashion that inspires confidence. As we grow, our focus remains on staying ahead of trends, strengthening our community, and ensuring that every customer finds something they love.
                </p>
              </section>
            </div>

            <div className="iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ZoiU8sprXpQ?si=nJ3LJ6BiVi2sFcoJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </div>
      </main>

      <footer id="footer">
        <p>&copy; Behnke's Goods - Cade Behnke</p>
      </footer>
    </>
  );
}

export default About;
