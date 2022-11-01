import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const authUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  );
}
