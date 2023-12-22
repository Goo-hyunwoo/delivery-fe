import React from "react";
import { Carousel as AntCarousel } from "antd";
import Card from "./Card";
import styled from "@emotion/styled";

interface Props {
  children?: JSX.Element[] | undefined;
}

const Area = styled.div`
  margin-top: 20px;
  width: 230px;
`;

export default function Carousel({ children }: Props) {
  return (
    <Area>
      <AntCarousel autoplay autoplaySpeed={5000}>
        <Card
          title={"스타벅스"}
          description={"스타벅스 강남점"}
          image_alt="스타벅스"
          image_url="https://starbugs.sg/wp-content/uploads/2023/05/logo-starbugs.png"
        />
        <Card
          title={"Europe Street beat1"}
          description={"www.instagram.com"}
          image_alt="sample"
          image_url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </AntCarousel>
    </Area>
  );
}
