import React from "react";
import "./GetStarted.css";
import getStarted from "../../assets/getStarted.png";
import { Container } from "react-bootstrap";

export default function GetStarted() {
  return (
    <section id="getStarted">
      <img
        src={getStarted}
        alt="none"
        className="startedImg"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="10"
        data-aos-duration="370"
        easing="ease-in-cubic"
      />
      <Container className="container">
        <div className="allText">
          <h1
            className="title"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Elevate Your Snack Game – Pure, Premium, Perfect.
          </h1>
          <p
            className="info"
            data-aos="slide-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-delay="10"
            data-aos-duration="370"
          >
            Makhpop is a premium Indian foxnut brand for the modern consumer.
          </p>
          <a
  href="https://www.linkedin.com/company/makhpop/posts/?feedView=all" 
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="getStartedBtn"
    data-aos="slide-up"
    data-aos-anchor-placement="bottom-bottom"
    data-aos-delay="20"
    data-aos-duration="1000"
    easing="ease-in"
  >
    <strong>Know about us</strong> - It's free
  </button>
</a>
        </div>
      </Container>
    </section>
  );
}
