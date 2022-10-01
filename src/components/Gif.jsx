import React from "react";
import { Link } from "wouter";

const Gif = ({ title, image, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="flex flex-col gap-4 card">
        <img className="max-height" src={image} alt={title} />
      </div>
    </Link>
  );
};

export default React.memo(Gif);
