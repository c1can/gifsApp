import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ email: "cargando..." });

  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      setUser(user1);
    });
  }, []);
  const provider = new GoogleAuthProvider();

  const authUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const logWithGoogle = () => {
    const loginGoogle = signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      return token;
    });
    return loginGoogle;
  };

  return (
    <AuthContext.Provider
      value={{ authUser, logUser, logOut, logWithGoogle, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
