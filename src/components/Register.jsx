import { useState } from "react";
import { useLocation } from "wouter";
import { Head } from "./Helmet";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function Register() {
  const [path, setPath] = useLocation();
  const [state, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = state;

  const { authUser } = useContext(AuthContext);

  const logUser = async (e) => {
    e.preventDefault();
    try {
      await authUser(email, password);
      setPath("/");
    } catch (error) {
      console.log(error.code);
      if (error.code == "auth/invalid-email") {
        setError("Ingresa un email valido");
      }
      //todo more error codes
      if (error.code == "auth/weak-password") {
        setError("Contraseña debil");
      }
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleUser = (evt) => {
    setUser({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <>
      <Head title="Register" description="This is the register page" />
      <form onSubmit={logUser} className="text-black flex flex-col gap-4">
        <input type="text" name="email" onChange={handleUser} />
        <input type="password" name="password" onChange={handleUser} />

        <button type="submit" className="text-white">
          Register
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
