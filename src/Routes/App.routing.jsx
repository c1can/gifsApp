import { Home } from "../components/Home";
import { Gifs } from "../components/Gifs";
import { Details } from "../components/Details";
import { InvalidSearch } from "../components/InvalidSearch";
import { Error } from "../components/404";
import { Route, Switch } from "wouter";
import { GifContextProvider } from "../context/GifContext";
import { Register } from "../components/Register";
import { Login } from "../components/Login";
import { ProtectedRoute } from "../components/ProtectedRote";

export const Routes = () => {
  return (
    <>
      <GifContextProvider>
        <Switch>
          <Route path="/">
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </Route>
          <Route path="/gif/:keyword/:category?/:language?">
            {(params) => <Gifs param={params} />}
          </Route>
          <Route path="/details/:id">
            {(params) => <Details id={params.id} />}
          </Route>
          <Route path="/InvalidSearch" component={InvalidSearch}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route component={Error} />
        </Switch>
      </GifContextProvider>
    </>
  );
};
