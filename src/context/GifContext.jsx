import { createContext } from "react";
import { useState } from "react";

export const GifContext = createContext({});

export const GifContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  );
};
