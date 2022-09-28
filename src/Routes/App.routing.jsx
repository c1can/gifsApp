import { Home } from "../components/Home";
import { Gifs } from "../components/Gifs";
import { Details } from "../components/Details";
import { Route } from "wouter";
import { GifContextProvider } from "../context/GifContext";
import { Link } from "wouter";

export const Routes = () => {
  return (
    <>
      <GifContextProvider>
        <Route path="/" component={Home}></Route>

        <Route path="/gif/:keyword">
          {(params) => (
            <>
              <Link
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-20"
                to="/"
              >
                Go to Home Page
              </Link>
              <Gifs param={params.keyword} />
            </>
          )}
        </Route>

        <Route path="/details/:id">
          {(params) => <Details id={params.id} />}
        </Route>
      </GifContextProvider>
    </>
  );
};
