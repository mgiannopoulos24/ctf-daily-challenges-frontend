import ChallengeCategory from "@/app/challenges/challenge-category";

export default function Challenges() {
    return (
        <main className="bg-white flex flex-col items-center pb-32 text-black">
            <section className="container py-8">
                <h1 className="text-center">Challenges</h1>
            </section>
            <ChallengeCategory categoryTitle="Forensics" />
            <ChallengeCategory categoryTitle="Binary Exploitation" />
            <ChallengeCategory categoryTitle="Cryptography" />
            <ChallengeCategory categoryTitle="Reverse Engineering" />
        </main>
    );
}