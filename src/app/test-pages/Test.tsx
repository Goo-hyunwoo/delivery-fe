import React, { useState } from "react";
import styled from "@emotion/styled";
import CountButton from "../components/CountButton";
import CountView from "../components/CountView";

const Div = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 20px auto;
  text-align: center;
`;

export default function Test() {
  const [count, setCount] = useState<number>(0);
  console.log("Test");
  return (
    <Div>
      <header className="App-header">
        <CountButton onClick={() => setCount((prev) => prev + 1)}>
          +
        </CountButton>
        <CountButton onClick={() => setCount((prev) => prev - 1)}>
          -
        </CountButton>
      </header>
      <CountView count={count} />
    </Div>
  );
}
