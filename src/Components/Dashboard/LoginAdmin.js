import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";

let listAdminAccount = [
  { username: "admin", password: "admin" },
  { username: "long", password: "deptrai" },
];

export default function LoginAdmin(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (evt) => {
    let { name, value } = evt.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };

  const loginAction = (e) => {
    e.preventDefault();

    listAdminAccount.map((item, index) => {
      if (
        item.username === state.username &&
        item.password === state.password
      ) {
        localStorage.setItem("account", JSON.stringify(state));
        return <Route path="/dashboard" component={Dashboard} />;
      } else {
        return alert("Wrong username or password!");
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleOnChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleOnChange}
      />
      <button onClick={loginAction}>Login</button>
    </div>
  );
}
