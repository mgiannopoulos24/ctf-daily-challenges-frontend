import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black h-[60px] border-b-2 border-terminal-green flex justify-center ">
            <nav className="container flex justify-between">
                <div className="flex gap-4 items-center">
                    <div className="bg-red-500 flex justify-center items-center h-[40px] w-[60px] text-xs">
                        Logo
                    </div>
                    <div className="text-terminal-green text-2xl flex gap-2 items-center font-medium">
                        <Link className="p-2" href="/home">
                            Home
                        </Link>
                        <Link className="p-2" href="/challenges">
                            Challenges
                        </Link>
                        <Link className="p-2" href="/leaderboard">
                            Leaderboard
                        </Link>
                        <Link className="p-2" href="/teams">
                            Teams
                        </Link>
                    </div>
                </div>
                <div className="text-terminal-green text-2xl flex gap-2 items-center font-medium">
                    <Link className="p-2" href="/login">
                        Log In
                    </Link>
                    <Link className="p-2" href="/register">
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    );
}
