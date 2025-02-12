"use client";

interface ChallengeButtonProps {
    challengeTitle: string;
}

export default function ChallengeButton({
    challengeTitle,
}: ChallengeButtonProps) {
    return (
        <div className="h-[150px] flex justify-center items-center text-3xl p-4 bg-terminal-green text-black">
            {challengeTitle}
        </div>
    );
}