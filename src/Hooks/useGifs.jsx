import { useContext, useEffect, useState } from "react";
import { Getgifs } from "../services/Gif";
import { GifContext } from "../context/GifContext";

export const useGifs = (param = null) => {
  let INITIAL_STATE = 0;
  const [page, setPage] = useState(INITIAL_STATE);
  const { gifs, setGifs } = useContext(GifContext);

  const newKeyword = param || localStorage.getItem("Mygif");

  useEffect(() => {
    const mycall = async () => {
      const data = await Getgifs({ keyword: newKeyword });
      setGifs(data);
    };
    mycall();
  }, [param]);

  useEffect(() => {
    if (page === INITIAL_STATE) return;

    const call = async () => {
      const data = await Getgifs({ keyword: newKeyword, page: page });
      setGifs((prev) => prev.concat(data));
    };
    call();
  }, [page]);

  return { gifs, setPage };
};
