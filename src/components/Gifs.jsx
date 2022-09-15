import { useEffect, useState } from "react";
import { Getgifs } from "../services/Gif";
import { Gif } from "./Gif";

export const Gifs = ({ param }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const mycall = async () => {
      const data = await Getgifs({keyword: param});
      setGifs(data);
    };
    mycall();
  }, [param]);

  return (
    <>
      {gifs.map(({ title, id, images }) => {
        const { downsized_medium } = images;
        const { url } = downsized_medium;
   
        return (
          <Gif title={title} image={url} id={id} key={id}/>
        );
      })}
    </>
  );
};




