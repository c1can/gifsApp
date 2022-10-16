import { Head } from "./Helmet";

export function Error() {
  return (
    <>
      <Head title="Page Not Found" description="Not page found" />
      <p>Sorry page not found</p>
    </>
  );
}
