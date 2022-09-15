import { Link } from "wouter";

export const Gif = ({ title, image, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="flex flex-col gap-4 card">
        <p>{title}</p>
        <img src={image} alt={title} />
      </div>
    </Link>
  );
};