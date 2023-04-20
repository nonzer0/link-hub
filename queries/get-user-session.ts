import type { SupabaseClient } from "@supabase/supabase-js";

export async function getUserSession(client: SupabaseClient) {
  const {
    data: { session },
  } = await client.auth.getSession();
  return session;
}

export async function signOutSession(client: SupabaseClient) {
  const { error } = await client.auth.signOut();
  return error;
}