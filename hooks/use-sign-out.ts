import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSupabase from "../hooks/supabase";

export function useSignOut() {
    const client = useSupabase();

    const queryClient = useQueryClient();
    return useMutation(async () => {
        const { error }: any = await client.auth.signOut();
        if (error) {
            throw new Error('Failed to logout');
        }

        queryClient.removeQueries();
    });
}