import { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "../Hooks/useGifs";
import { ListGifs } from "./ListGifs";
import { LazyTrending } from "./LazyTrending";

export const Home = () => {
  const [gifValue, setValue] = useState("");
  const [path, setPath] = useLocation();

  const { gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPath(`/gif/${gifValue}`);
  };
  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">HomePage</h1>

      <form onSubmit={handleSubmit} className="my-6">
        <label htmlFor="search">Search</label>
        <input
          onChange={handleChange}
          className="mx-2 text-black p-1"
          type="text"
          name="search"
        />
        <button>Submit</button>
      </form>
      <LazyTrending />
      <h2 className="text-2xl font-bold my-4">Ultimas Busquedas:</h2>

      <ListGifs gifs={gifs} />
    </>
  );
};
