import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "wouter";
import { Head } from "./Helmet";

export function Login() {
  const [path, setPath] = useLocation();
  const [state, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;

  const logUser = (e) => {
    e.preventDefault();
    setPath("/");
  };

  const handleUser = (evt) => {
    setUser({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <Head title="Login" description="This is the login page" />
      <form onSubmit={logUser}>
        <input type="text" name="username" onChange={handleUser} />
        <input type="password" name="password" onChange={handleUser} />

        <button type="submit">login</button>
      </form>
    </>
  );
}
