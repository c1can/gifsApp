import Gif from "./Gif";
import { useGifs } from "../Hooks/useGifs";
import { lazyGifs } from "../Hooks/useLazy";
import { useEffect } from "react";

export const ListGifs = ({ gifs }) => {
  const { setPage } = useGifs();
  const { show, elementRef } = lazyGifs();

  useEffect(() => {
    if (show) {
      setPage((prev) => prev + 1);
    }
  }, [show]);

  return (
    <>
      <section className="list_gifs w-4/5 auto-margin grid custom-grid gap-4 items-center">
        {gifs.map(({ title, id, images }) => {
          const { downsized_medium } = images;
          const { url } = downsized_medium;

          return <Gif title={title} image={url} id={id} key={id} />;
        })}
      </section>
      <div className="watch h-4 w-100" ref={elementRef}></div>
    </>
  );
};
