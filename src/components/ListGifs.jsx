import { Gif } from "./Gif";
import { Link } from "wouter";

export const ListGifs = ({ gifs }) => {
  return (
    <>
      <Link className="bg-white py-2 px-4 text-black" to="/">
        Inicio
      </Link>

      <section className="gifs m-4 flex flex-col gap-4">
        {gifs.map(({ title, id, images }) => {
          const { downsized_medium } = images;
          const { url } = downsized_medium;

          return <Gif title={title} image={url} id={id} key={id} />;
        })}
      </section>
    </>
  );
};
