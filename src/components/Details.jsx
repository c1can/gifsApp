import Gif from "./Gif";
import { useSingle } from "../Hooks/useSingleGif";
import ClipLoader from "react-spinners/ClipLoader";
import { Head } from "./Helmet";

export const Details = ({ id }) => {
  const { gif, loading } = useSingle(id);

  if (loading) return <ClipLoader size={50} color={"#fff"} />;
  if (!gif) return null;

  const { images, title } = gif;
  const { downsized_medium } = images;
  const { url } = downsized_medium;

  return (
    <div className="details h-screen grid place-content-center">
      <Head title={title} description="Details of gif" />
      <Gif title={title} image={url} />
    </div>
  );
};
