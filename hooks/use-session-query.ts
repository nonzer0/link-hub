import { useQuery } from "@tanstack/react-query";
import { getUserSession } from "../queries/get-user-session";
import useSupabase from "../hooks/supabase";

export function useSessionQuery() {
  const client = useSupabase();
  const key = ["session"];

  return useQuery(key, async () => {
    return getUserSession(client).then((result) => {
      console.log("result", result);
      return result;
    });
  });
}

