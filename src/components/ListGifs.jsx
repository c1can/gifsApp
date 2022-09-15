import { Gif } from "./Gif";

export const ListGifs = ({ gifs }) => {
  return (
    <>
      <section className="w-4/5 auto-margin grid custom-grid gap-4">
        {gifs.map(({ title, id, images }) => {
          const { downsized_medium } = images;
          const { url } = downsized_medium;

          return <Gif title={title} image={url} id={id} key={id} />;
        })}
      </section>
    </>
  );
};
