import { useContext } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { AuthContext } from "../context/AuthContext";

export function Nav() {
  const { logOut } = useContext(AuthContext);
  const handleClick = async () => {
    await logOut();
  };

  return (
    <header className="flex justify-end gap-4">
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button onClick={handleClick}>SignOut</button>
    </header>
  );
}
