import axios from "axios";
import { useState } from "react";

export const useGetChats = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchChats = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://620959146df46f0017f4c4b6.mockapi.io/api/chats"
      );
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    fetchChats,
  };
};


// const { data } = await axios.post(
//     "https://620959146df46f0017f4c4b6.mockapi.io/api/chats"
//     , {id, ...});