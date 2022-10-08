import { useSingle } from "../Hooks/useSingleGif";
import { Head } from "./Helmet";

export const Details = ({ id }) => {
  const { gif } = useSingle(id);

  if (!gif) return null;

  const { images, title } = gif;
  const { downsized_medium } = images;
  const { url } = downsized_medium;

  return (
    <div className="details h-screen grid place-content-center">
      <Head title={title} description="Details of gif" />
      <img src={url} alt={title} />
    </div>
  );
};
