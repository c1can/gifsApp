import { useEffect, useState } from "react";
import { getSingleGif } from "../services/getSingle";
import { useGifs } from "./useGifs";

export function useSingle(id) {
  const { gifs } = useGifs();
  const img = gifs.find((gif) => gif.id === id);

  const [gif, setGif] = useState(img);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!gif) {
      setLoading(true);
      getSingleGif(id).then((data) => {
        setGif(data);
        setLoading(false);
      });
    }
  }, [id, img]);

  return { gif, loading };
}
