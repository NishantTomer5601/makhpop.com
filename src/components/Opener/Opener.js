import React from "react";
import styled from "styled-components";

export default function Opener() {
  return (
    <Main id="opener">
      <Container>
        <Heading
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-delay="10"
          data-aos-duration="370"
        >
          Makhpop
        </Heading>
      </Container>
    </Main>
  );
}

const Main = styled.main`
  background-color: #5e7454; /* Set your preferred solid background color */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Container = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: clamp(8rem, 20vw, 14rem);
  color: #e2d5a9;
  font-weight: normal;
`;