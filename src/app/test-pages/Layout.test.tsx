import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout Component Test", () => {
  it("Render 4 Header, 4 Content, 4 Footer, 3 Sider Test", () => {
    render(<Layout />);
    const headers = screen.getAllByText("Header");
    const contents = screen.getAllByText("Content");
    const footerss = screen.getAllByText("Footer");
    const siders = screen.getAllByText("Sider");

    expect(headers.length).toBe(4);
    expect(contents.length).toBe(4);
    expect(footerss.length).toBe(4);
    expect(siders.length).toBe(3);
  });

  it("Sider Open & Close Event Test", () => {
    render(<Layout />);
    const openBtn = screen.getByRole("img");
    expect(openBtn).not.toBeEmptyDOMElement();

    fireEvent.click(openBtn);

    const closeBtn = screen.getByRole("img");
    expect(closeBtn).not.toBeEmptyDOMElement();

    fireEvent.click(openBtn);
    expect(openBtn).not.toBeEmptyDOMElement();
  });

  it("Sider Mouseover Test", () => {
    render(<Layout />);
    const openBtn = screen.getByRole("img");
    expect(openBtn).not.toBeEmptyDOMElement();

    fireEvent.mouseOver(openBtn);
    expect(openBtn).toHaveStyle("cursor: pointer");
  });
});
