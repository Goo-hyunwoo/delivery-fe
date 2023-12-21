import React from "react";
import styled from "@emotion/styled";

interface Props {
  onClick: () => void;
  children?: string;
}

const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: red;
  font-size: 30px;
`;

export default function CountButton({ onClick, children = "default" }: Props) {
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };
  return <Button onClick={onClickHandler}>{children}</Button>;
}
