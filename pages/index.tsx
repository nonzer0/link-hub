import Image from 'next/image'
import useSupabase from '@/hooks/supabase'
import { useSessionQuery } from "@/hooks/use-session-query";
import Auth from '@/components/Auth';
import ProtectedWrapper from '@/components/ProtectedWrapper';
import { NavBar } from '@/components'

export default function Home() {
  // const client = useSupabase();

  // const { data: session, isLoading, isError } = useSessionQuery();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }
  return (
    <ProtectedWrapper>

    <div>
      {/* {!session ? (
        <Auth />
      ) : ( */}
        <div>
          <NavBar />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              </div>
            </div>
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            </div>
          </main>
        </div>
      )
      {/* } */}
    </div>
    </ProtectedWrapper>
  )
}
