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
            Makhpop is a premium Indian foxnut brand for the modern consumer.
          </p>
        </div>
      </Container>
    </section>
  );
}
