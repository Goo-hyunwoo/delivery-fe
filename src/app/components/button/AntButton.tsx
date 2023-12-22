import styled from "@emotion/styled";
import { Button, ButtonProps } from "antd";
import React from "react";

const SignUp = styled(Button)`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 15px 0;
`;

export default function AntButton(props: ButtonProps) {
  return <SignUp {...props} />;
}
