import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../../pages/user/LoginForm";

describe("User Login Test", () => {
  it("Id & Password Input Render", () => {
    render(<LoginForm />);
    const idInput = screen.getByPlaceholderText("아이디를 입력하세요.");
    const passwordInput = screen.getByPlaceholderText("비밀번호를 입력하세요.");

    expect(idInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("Sign in Button Render", () => {
    render(<LoginForm />);
    const signInButton = screen.getByText("Sign In");

    expect(signInButton).toBeInTheDocument();
  });

  it("Input Change & Button click", () => {
    const onSignIn = jest.fn();

    const idInput = screen.getByPlaceholderText("아이디를 입력하세요.");
    const passwordInput = screen.getByPlaceholderText("비밀번호를 입력하세요.");
    const signInButton = screen.getByText("Sign In");

    fireEvent.change(idInput, { target: { value: "admin" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });
    fireEvent.click(signInButton);

    expect(onSignIn).toBeCalledWith({ id: "admin", password: "123" });
  });
});
