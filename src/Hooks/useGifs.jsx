import { useState, useEffect } from "react";
import { Getgifs } from "../services/Gif";

export const useGifs = (param) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const mycall = async () => {
      const data = await Getgifs({ keyword: param });
      setGifs(data);
    };
    mycall();
  }, [param]);

  return { gifs };
};
