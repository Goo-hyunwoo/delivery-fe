import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const user = "user";
  return user === undefined ? <Outlet /> : <Navigate to="/login" />;
  //   return <Navigate to="/" />;
}
