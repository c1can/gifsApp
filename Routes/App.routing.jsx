import { Home } from "../src/components/Home";
import { Gifs } from "../src/components/Gifs";
import { Details } from "../src/components/Details";
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
