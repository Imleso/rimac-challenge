import { useEffect, useState } from "react";
import { User } from "../types";

export const useGetUser = (url: string) => {
  const [data, setData] = useState<User | null>(null);
  const getUser = async () => {
    try {
      const res = await fetch(url);
      const dat = await res.json();
      setData(dat);
    } catch (error) {
      console.log(error);
      setData(null)
    }
    return 
  };

  useEffect(() => {
    getUser();
  }, [url]);

  return {data, getUser};
};
