import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Getgifs } from "../services/Gif";
import { ListGifs } from "./ListGifs";

export const Home = () => {
  const [gifValue, setValue] = useState("");
  const [path, setPath] = useLocation();
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const mycall = async () => {
      const data = await Getgifs({ keyword: "rick" });
      setGifs(data);
    };
    mycall();
  }, []);

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
      <nav className="flex gap-5">
        <Link
          className="bg-white text-black py-1.5 rounded-sm px-2 no-underline"
          to="/gif/programacion"
        >
          Gifs de Programacion
        </Link>
        <Link
          className="bg-white text-black py-1.5 rounded-sm px-2 no-underline"
          to="/gif/qatar"
        >
          Gifs de Qatar
        </Link>
        <Link
          className="bg-white text-black py-1.5 rounded-sm px-2 no-underline"
          to="/gif/messi"
        >
          Gifs de Messi
        </Link>
      </nav>

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
      <h2>Ultimas Busquedas:</h2>

      <ListGifs gifs={gifs} />
    </>
  );
};
