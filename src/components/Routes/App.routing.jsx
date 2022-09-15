import { Home } from "../Home";
import { Gifs } from "../Gifs";
import { Details } from "../Details";
import { Route } from "wouter";

export const Routes = () => {
  return (
    <>
      <Route path="/" component={Home}></Route>

      <Route path="/gif/:keyword">
        {(params) => <Gifs param={params.keyword} />}
      </Route>

      <Route path="/details/:id">
        {(params) => <Details id={params.id} />}
      </Route>
    </>
  );
};
