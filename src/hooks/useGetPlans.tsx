import { useEffect, useState } from "react";
import { Plans } from "../types/plans.type";


export const useGetPlans = (url: string) => {
  const [data, setData] = useState<Plans>({
    list: []
  });
  const getPlans = async () => {
    try {
      const res = await fetch(url);
      const dat = await res.json();
      setData(dat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlans();
  }, [url]);

  return data;
};