import { Link } from "wouter";

export const Home = () => {
  return (
    <>
        <h1 className="mb-6 text-3xl font-bold">HomePage</h1>
        <nav className="flex gap-5">
          <Link className="bg-white text-black py-1.5 rounded-sm px-2 no-underline" to="/gif/panda">Gifs de Pandas</Link>
          <Link className="bg-white text-black py-1.5 rounded-sm px-2 no-underline" to="/gif/qatar">Gifs de Qatar</Link>
          <Link className="bg-white text-black py-1.5 rounded-sm px-2 no-underline" to="/gif/messi">Gifs de Messi</Link>
        </nav>
    </>
  );
};
