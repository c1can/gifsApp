import { createContext } from "react";
import { useState } from "react";

export const GifContext = createContext({}); //este es mi contexto

export const GifContextProvider = ({ children }) => {
  //este es mi Provider
  const [gifs, setGifs] = useState([]);

  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  );
};
