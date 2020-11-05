import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function Auth({ path, Component }) {
  return (
    <Route
      path={path}
      render={(routeProps) => {
        if (localStorage.getItem("loginUser")) {
          return <Component {...routeProps} />;
        }

        alert("Vui long dang nhap!");
        return <Redirect to="/login" />;
      }}
    />
  );
}
