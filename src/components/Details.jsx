import { useContext } from "react";
import { GifContext } from "../context/GifContext";
import Gif from "./Gif";

export const Details = ({ id }) => {
  const { gifs } = useContext(GifContext);

  const img = gifs.find((gif) => gif.id === id);

  const { images, title } = img;
  const { downsized_medium } = images;
  const { url } = downsized_medium;

  return <Gif title={title} image={url} />;
};
