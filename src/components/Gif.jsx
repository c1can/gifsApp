import React from "react";
import { Link } from "wouter";

const Gif = ({ title, image, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="card flex justify-center">
        <img src={image} alt={title} />
      </div>
    </Link>
  );
};

export default React.memo(Gif);
