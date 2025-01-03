import { useState } from "react";
import supabase from "@/utils/supabase";

const usePost = (table, defaultData = []) => {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postingData = async (postData) => {
    try {
      setIsLoading(true);
      const { data, error: insertError } = await supabase
        .from(table)
        .insert(postData);
      if (insertError) setError(insertError);
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isPosting: isLoading,
    error,
    postData: postingData,
  };
};
export default usePost;
