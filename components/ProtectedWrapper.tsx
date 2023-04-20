import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query'
import useSupabase from '@/hooks/supabase'
import { useSessionQuery } from "@/hooks/use-session-query";

export default function ProtectedWrapper({children}: any) {
  const router = useRouter()
  const client = useSupabase();

  const { data: session, isLoading, isError } = useSessionQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  //**** */
//   const result: any = useQuery(['session']);
//   if(result.status === 'loading') {
//     return (
//       <div className="h-screen grid place-items-center">
//         Loading
//       </div>
//     )
//   }

//   if(result.status === 'error') {
//     console.log('status', result.status);
//     router.push('/auth/login')
//     return (
//       <div className="h-screen grid place-items-center">
//         Error
//       </div>
//     )
//   }

  return (
    <div>
      {children}
    </div>
  )
}
