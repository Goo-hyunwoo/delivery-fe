import React from "react";
import styled from "@emotion/styled";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Carousel from "./layout/Carousel";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
  padding: 24px 0;
`;

export default function MainPage() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <Carousel />
          <Carousel />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}
