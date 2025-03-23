import React from "react";
import { Container } from "react-bootstrap";
import "./Mission.css";

export default function Mission() {
  return (
    <section id="mission">
      <Container>
        <div className="content">
          <h1
            className="title"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="30"
            data-aos-duration="1000"
          >
            our
            <br /> mission
          </h1>
          <p
            className="info"
            data-aos="fade-down-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
  <p>We’re on a mission to make makhana the ultimate healthy snack by:</p>
  <ul>
    <li>Supporting farmers with fair trade partnerships.</li>
    <li>Blending tradition with innovation for better snacking.</li>
    <li>Making nutrition-packed treats accessible and fun!</li>
  </ul>

          </p>
        </div>
      </Container>
    </section>
  );
}
