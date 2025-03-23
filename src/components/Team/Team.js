import React from "react";
import { Container } from "react-bootstrap";
import "./Team.css";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";

export default function Team() {
  return (
    <article id="team">
      <Container className="container">
        <div className="content">
          <h1 className="title">Meet the Team</h1>
          <div className="teamGrid">
            <div xs={4} className="member">
              <img
                src={member3}
                alt="Hrithik"
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
              <h3 className="memberInfo">
              Hrithik Bharti
                <br />
               Founder | Food Innovator 
                <br />
                founder@makhpop.com
              </h3>
            </div>
            <div
              className="member"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <img src={member2} alt="Abhigyan" />
              <h3 className="memberInfo">
              Abhigyan Prakash 
                <br />
                Co-Founder | FMCG & Product Strategy Expert
                <br />
               team@makhpop.com
              </h3>
            </div>

          </div>
        </div>
      </Container>
    </article>
  );
}
