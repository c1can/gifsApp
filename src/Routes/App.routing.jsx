import { Home } from "../components/Home";
import { Gifs } from "../components/Gifs";
import { Details } from "../components/Details";
import { InvalidSearch } from "../components/InvalidSearch";
import { Error } from "../components/404";
import { Route, Switch } from "wouter";
import { GifContextProvider } from "../context/GifContext";

export const Routes = () => {
  return (
    <>
      <GifContextProvider>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/gif/:keyword/:category?/:language?">
            {(params) => <Gifs param={params} />}
          </Route>
          <Route path="/details/:id">
            {(params) => <Details id={params.id} />}
          </Route>
          <Route path="/InvalidSearch" component={InvalidSearch}></Route>
          <Route component={Error} />
        </Switch>
      </GifContextProvider>
    </>
  );
};
