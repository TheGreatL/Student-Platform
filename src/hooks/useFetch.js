import { useState, useEffect } from "react";
import supabase from "@/utils/supabase";

const useFetch = (table, select = "", defaultData = []) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from(table)
          .select(select);
        if (fetchError) setError(fetchError);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    const postChannel = supabase
      .channel(table)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: table },
        (payload) => {
          console.log("Change Received", payload);
          setData((prevData) => [...prevData, payload.new]);
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(postChannel);
    };
  }, [select, table]);

  useEffect(() => {}, []);

  return {
    data,
    isFetching: isLoading,
    error,
  };
};
export default useFetch;
