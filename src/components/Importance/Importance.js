import React from "react";
import "./Importance.css";
import art from "../../assets/Untitled_Artwork -1.png";
import { Container } from "react-bootstrap";

export default function Importance() {
  return (
    <section id="importance">
      <Container className="container">
        <img src={art} alt="not found" />
        <h1 className="title">
          Why We Are
          <br /> Different
        </h1>
        <div
          className="first-left"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="first-left-title">Farm-Fresh Quality</h2>
          <p className="first-left-info">
          At Makhpop, we bring you farm-fresh makhanas, sourced directly from trusted farmers to ensure unmatched quality and freshness. We guarantee that every bite is packed with the natural goodness of hand-picked, premium foxnuts.
          </p>
        </div>
        <div
          className="first-right"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >

<div className="first-right-info">
  <h2 className="first-right-title">Bold Flavors, Modern Twist</h2>
  We’ve taken this classic superfood and infused it with bold, modern flavors, making healthy snacking more exciting than ever. Whether you crave something spicy, tangy, or subtly sweet, our makhanas deliver a crunch you’ll love—without compromising on nutrition.
          
</div>
        </div>
        <div
          className="second-left"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="370"
          data-aos-delay="10"
        >
          <h2 className="second-left-title">Sustainably Made</h2>
          <p className="second-left-info">
          With 100% natural ingredients and a commitment to sustainable processing, MakhPop ensures that what you snack on is not just good for you, but also for the planet. No artificial flavors, no preservatives—just pure, wholesome goodness in every pack!{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}
