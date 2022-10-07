import { Home } from "../components/Home";
import { Gifs } from "../components/Gifs";
import { Details } from "../components/Details";
import { Route } from "wouter";
import { GifContextProvider } from "../context/GifContext";

export const Routes = () => {
  return (
    <>
      <GifContextProvider>
        <Route path="/" component={Home}></Route>

        <Route path="/gif/:keyword">
          {(params) => <Gifs param={params.keyword} />}
        </Route>

        <Route path="/details/:id">
          {(params) => <Details id={params.id} />}
        </Route>
      </GifContextProvider>
    </>
  );
};
