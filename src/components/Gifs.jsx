import { useGifs } from "../Hooks/useGifs";
import { ListGifs } from "./ListGifs";

export const Gifs = ({ param }) => {
  localStorage.setItem("Mygif", param);
  const { gifs } = useGifs(param);

  return <ListGifs gifs={gifs} />;
};
