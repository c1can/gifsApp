import { useContext, useEffect, useState } from "react";
import { Getgifs } from "../services/Gif";
import { GifContext } from "../context/GifContext";

export const useGifs = (param = null, category, language) => {
  let INITIAL_STATE = 0;
  const [page, setPage] = useState(INITIAL_STATE);
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);

  const newKeyword = param || localStorage.getItem("Mygif");

  useEffect(() => {
    const mycall = async () => {
      const data = await Getgifs({
        keyword: newKeyword,
        category: category,
        language: language,
      });
      setGifs(data);
    };
    mycall();
  }, [param, category]);

  useEffect(() => {
    if (page === INITIAL_STATE) return;

    const call = async () => {
      const data = await Getgifs({
        keyword: newKeyword,
        page: page,
        category: category,
        language: language,
      });
      setGifs((prev) => prev.concat(data));
      setLoading(false);
    };
    call();
  }, [page, category]);

  return { gifs, setPage, loading, setLoading };
};
