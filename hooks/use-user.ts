// import { useQuery } from '@tanstack/react-query'
// import useSupabase from "../hooks/supabase";

// const getUser = async ({userId}) => {
//     const client = useSupabase();
//   const { data, error } = await client
//     .from('users')
//     .select()
//     .eq('id', userId)
//     .single()

//   if(error) {
//     throw new Error(error.message)
//   }

//   if(!data) {
//     throw new Error("User not found")
//   }

//   return data
// }

// import { useQuery } from '@tanstack/react-query'

// export default function useGetUsernameFromSession() {
//   const user = supabase.auth.user()
//   return useQuery('user', () => getUser(user?.id))
// }

// export useGetUser
// 
