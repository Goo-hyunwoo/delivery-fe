import React from "react";
import { render, screen } from "@testing-library/react";
import CountView from "./CountView";

test("CountView 컴포넌트의 Props 상속 테스트", () => {
  let initCount = 23;
  render(<CountView count={initCount} />);
  const initState = screen.getByText(`현재 숫자는 ${initCount}`);
  expect(initState).toBeInTheDocument();
});
