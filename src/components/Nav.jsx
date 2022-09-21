import { Link } from "wouter";

export const Nav = () => {
  return (
    <nav className="flex justify-center gap-4">
      <Link
        className="bg-white text-black py-1.5 rounded-sm px-2 no-underline"
        to="/gif/programacion"
      >
        Gifs de Programacion
      </Link>
      <Link
        className="bg-white text-black py-1.5 rounded-sm px-2 no-underline"
        to="/gif/qatar"
      >
        Gifs de Qatar
      </Link>
      <Link
        className="bg-white text-black py-1.5 rounded-sm px-2 no-underline"
        to="/gif/messi"
      >
        Gifs de Messi
      </Link>
    </nav>
  );
};
