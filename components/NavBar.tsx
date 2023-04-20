import Link from 'next/link'
import { useRouter } from "next/router";
import { useSignOut } from '@/hooks/use-sign-out';
import { User } from '@/components/User'

export function NavBar() {
    const logoutMutation = useSignOut();
    const router = useRouter()

    if (logoutMutation.isSuccess) {
        router.push('/');
    }

    return (
        <div className="flex sticky items-center justify-around py-6 bg-blue-500 text-white shadow">
            <Link href="/">
                <div className="text-2xl">
                    Home
                </div>
            </Link>
            <div className="text-xl flex items-center space-x-4">
                <div>
                    <Link href="/search ">
                        Search
                    </Link>
                </div>
                <div>
                    <User />
                </div>
                <div
                    className="cursor-pointer"
                    onClick={() => logoutMutation.mutate()}
                >
                    {/* Logout feather icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-log-out"
                    >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}
