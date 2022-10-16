import Gif from "./Gif";
import { useGifs } from "../Hooks/useGifs";
import { lazyGifs } from "../Hooks/useLazy";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const ListGifs = ({ gifs }) => {
  const { setPage, setLoading, loading } = useGifs();
  const { show, elementRef } = lazyGifs();

  useEffect(() => {
    if (show) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  }, [show]);

  return (
    <>
      <section className="list_gifs w-4/5 auto-margin grid custom-grid gap-4 items-center">
        {gifs.map(({ title, id, images }, index) => {
          const { downsized_medium } = images;
          const { url } = downsized_medium;

          return <Gif title={title} image={url} id={id} key={url} />;
        })}
      </section>
      <ClipLoader loading={loading} color={"#fff"} size={50} />
      <div className="watch h-4 w-100" ref={elementRef}></div>
    </>
  );
};
