import React from "react";
import { Navigate } from "react-router-dom";
import { user } from "../store";

export default function PrivateRoute({ children, allowedRoles }) {
  if (!user.isAuth) {
    return <Navigate to="/login" />;
  }

  return !allowedRoles || allowedRoles.includes(user.role) ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/" />
  );
}
