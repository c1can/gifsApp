import { useState, useEffect } from "react";
import { Getgifs } from "../services/Gif";

export const useGifs = (param = null) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const mycall = async () => {
      const newKeyword = param || localStorage.getItem("Mygif");
      const data = await Getgifs({ keyword: newKeyword });
      setGifs(data);
    };
    mycall();
  }, [param]);

  return { gifs };
};
