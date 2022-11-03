import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ email: "cargando..." });

  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      console.log(user1);
      setUser(user1);
    });
  }, []);

  const authUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ authUser, logUser, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
