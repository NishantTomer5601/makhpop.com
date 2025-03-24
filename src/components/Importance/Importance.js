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
          At Makhpop, we bring you farm-fresh makhanas, sourced directly from trusted 
          farmers to ensure unmatched quality and freshness. 
          </p>
        </div>
        <div
          className="first-right"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
          <h2 className="first-right-title">Bold Flavors, Modern Twist</h2>
          <div className="first-right-info">
          We have taken this classic superfood and infused it with bold, modern flavors,
          making healthy snacking more exciting than ever.
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
          With 100% natural ingredients and a commitment to sustainable processing,
          Makhpop ensures that what you snack on is not just good for you, but
          also for the planet.{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}