import { useContext } from "react";
import { StaticContext } from "../context/StaticContext";
import { GifContext } from "../context/GifContext";

export const Details = ({ id }) => {
  const context = useContext(StaticContext);
  const context2 = useContext(GifContext);

  console.log(context2);
  console.log(context);

  return (
    <div>
      <h1>Hola Details</h1>
      <p>este es mi id: {id}</p>
    </div>
  );
};
