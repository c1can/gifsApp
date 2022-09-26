import { Gif } from "./Gif";
import { useGifs } from "../Hooks/useGifs";

export const ListGifs = ({ gifs }) => {
  const { setPage } = useGifs();

  const handleButton = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <section className="list_gifs w-4/5 auto-margin grid custom-grid gap-4 items-center">
        {gifs.map(({ title, id, images }) => {
          const { downsized_medium } = images;
          const { url } = downsized_medium;

          return <Gif title={title} image={url} id={id} key={id} />;
        })}
      </section>
      <button
        onClick={handleButton}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-20"
      >
        Load More
      </button>
    </>
  );
};
