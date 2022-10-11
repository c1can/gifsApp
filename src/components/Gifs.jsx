import { useGifs } from "../Hooks/useGifs";
import { ListGifs } from "./ListGifs";
import { Head } from "./Helmet";
import { Link } from "wouter";
import Search from "./Search";

export const Gifs = ({ param }) => {
  const { keyword, category } = param;

  localStorage.setItem("Mygif", keyword);
  const { gifs } = useGifs(keyword, category);

  return (
    <>
      <Head
        title={`Results of ${decodeURI(keyword)}`}
        description="Results of gifs"
      />
      <Link
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-20"
        to="/"
      >
        Go to Home Page
      </Link>
      <Search />
      <ListGifs gifs={gifs} />
    </>
  );
};
