import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebase";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const authUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  return (
    <AuthContext.Provider value={{ authUser, logUser }}>
      {children}
    </AuthContext.Provider>
  );
}
