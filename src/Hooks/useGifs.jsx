import { useContext, useEffect } from "react";
import { Getgifs } from "../services/Gif";
import { GifContext } from "../context/GifContext";

export const useGifs = (param = null) => {
  const { gifs, setGifs } = useContext(GifContext);

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
