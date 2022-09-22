import { useState, useEffect } from "react";
import { getTrending } from "../services/getTrending";

export const useTrending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const trendingAPI = async () => {
      const data = await getTrending();
      setTrending(data);
    };
    trendingAPI();
  }, []);

  return { trending };
};
