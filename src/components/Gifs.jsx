import { useEffect, useState } from "react";
import { Getgifs } from "../services/Gif";
import { ListGifs } from "./ListGifs";

export const Gifs = ({ param }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const mycall = async () => {
      const data = await Getgifs({ keyword: param });
      setGifs(data);
    };
    mycall();
  }, [param]);

  return <ListGifs gifs={gifs} />;
};
