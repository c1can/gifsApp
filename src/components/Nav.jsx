import { Link } from "wouter";

export function Nav() {
  return (
    <header className="flex justify-end gap-4">
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </header>
  );
}
