import React from "react";
import LoginForm from "./app/pages/user/LoginForm";
import Layout from "./app/test-pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MainPage from "./app/pages/MainPage";
import UserRegistForm from "./app/pages/user/UserRegistForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signIn" element={<LoginForm />}></Route>
        <Route path="/signUp" element={<UserRegistForm />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/layout" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
