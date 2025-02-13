import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-black flex justify-center">
            <section className="container flex flex-col items-center justify-center text-terminal-green gap-4">
                <h1 className="font-extrabold text-[150px] leading-none">
                    404
                </h1>
                <p className="text-2xl">
                    Oops... It seems that you wandered off.
                </p>
                <Link className="underline text-2xl" href="/home">
                    Take me Home
                </Link>
            </section>
        </main>
    );
}
