import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Test from "./Test";

describe("Test Component Test", () => {
  it("Button & View Rendering Test", () => {
    render(<Test />);
    const view = screen.getByText(`현재 숫자는 0`);
    const buttons = screen.getAllByRole("button");

    expect(view).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it("Plus button click & View shows 3", () => {
    render(<Test />);
    const view = screen.getByText(`현재 숫자는 0`);
    expect(view).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[0]);

    const view3 = screen.getByText(`현재 숫자는 3`);
    expect(view3).toBeInTheDocument();
  });

  it("Minus button click & View shows -2", () => {
    render(<Test />);
    const view = screen.getByText(`현재 숫자는 0`);
    expect(view).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);

    const view3 = screen.getByText(`현재 숫자는 -2`);
    expect(view3).toBeInTheDocument();
  });
});
