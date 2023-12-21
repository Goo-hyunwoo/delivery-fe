import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CountButton from "./CountButton";

describe("<CountButton />", () => {
  test("CountButton 컴포넌트의 Props 무상속 테스트", () => {
    render(<CountButton onClick={() => {}}></CountButton>);
    const initState = screen.getByText(`default`);
    expect(initState).toBeInTheDocument();
  });

  test("CountButton 컴포넌트의 Props 상속 테스트", () => {
    let initName = "테스트";
    render(<CountButton onClick={() => {}}>{initName}</CountButton>);
    const initState = screen.getByText(initName);
    expect(initState).toBeInTheDocument();
  });

  it("has an increment button and a decrement button", () => {
    render(<CountButton onClick={() => {}} />);
    const initBtn = screen.getByText(`default`);

    expect(initBtn).toBeInTheDocument();
  });

  it("calls incrementFn and decrementFn", () => {
    const incrementFn = jest.fn();
    render(<CountButton onClick={incrementFn} />);
    const initBtn = screen.getByText(`default`);

    fireEvent.click(initBtn);

    expect(incrementFn).toBeCalled();
  });
});
