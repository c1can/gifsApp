import { useContext } from "react";
import { Redirect } from "wouter";
import { AuthContext } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Redirect to="/login" />;

  return <>{children}</>;
}
