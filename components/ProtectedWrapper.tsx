import { useSessionQuery } from "@/hooks/use-session-query";

export default function ProtectedWrapper({children}: any) {

  const { isLoading, isError } = useSessionQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      {children}
    </div>
  )
}
