import { useGifs } from "../Hooks/useGifs";
import { ListGifs } from "./ListGifs";
import { LazyTrending } from "./LazyTrending";
import Search from "./Search";

export const Home = () => {
  const { gifs } = useGifs();
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">HomePage</h1>
      <Search />
      <LazyTrending />
      <h2 className="text-2xl font-bold my-4">Ultimas Busquedas:</h2>

      <ListGifs gifs={gifs} />
    </>
  );
};
