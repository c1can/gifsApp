import { Helmet, HelmetProvider } from "react-helmet-async";

export function Head({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Gify| {title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
}
