import { lazy, Suspense } from "react";
import { useLazy } from "../Hooks/useLazy";

const TrendingGifs = lazy(() => import("./TrendingGifs"));

export const LazyTrending = () => {
  const { elementRef, show } = useLazy();
  return (
    <section ref={elementRef}>
      <Suspense fallback={"Loading..."}>
        {show ? <TrendingGifs /> : null}
      </Suspense>
    </section>
  );
};
