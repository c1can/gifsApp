import { Head } from "./Helmet";
import { Search } from "./Search";

export function InvalidSearch() {
  return (
    <>
      <Head title="No Results" description="Not found results" />
      <Search />
      <p>Invalid Search Try Again</p>
    </>
  );
}
