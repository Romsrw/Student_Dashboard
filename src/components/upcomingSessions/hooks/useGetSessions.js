import axios from "axios";
import { useState } from "react";

export const useGetSessions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLimitDone, setIsLimitDone] = useState(false);

  const fetchSessions = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://620959146df46f0017f4c4b6.mockapi.io/api/sessions?page=${page}&limit=3`
      );
      if (data.length < 3) {
        setIsLimitDone(true);
      } else {
        setPage((prev) => prev + 1);
      }
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isLimitDone,
    fetchSessions,
  };
};
