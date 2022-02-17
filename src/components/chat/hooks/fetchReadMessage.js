import axios from "axios";
import { useState } from "react";

export const useReadMessage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchRead = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `https://620959146df46f0017f4c4b6.mockapi.io/api/chats/${id}`, {unReadMessagesCount: 0}
      );
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    fetchRead,
  };
};
