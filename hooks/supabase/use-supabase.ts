import { useMemo } from "react";
import { getSupabaseClient } from "./supabaseClient";

function useSupabase() {
  return useMemo(getSupabaseClient, []);
}

export default useSupabase;
