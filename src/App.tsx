import React from "react";
import LoginForm from "./app/pages/user/LoginForm";
import Layout from "./app/test-pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
