"use client";

import ChallengeButton from "@/app/challenges/challenge-button";

interface ChallengeCategoryProps {
    categoryTitle: string;
}
export default function ChallengeCategory({
    categoryTitle,
}: ChallengeCategoryProps) {
    return (
        <section className="container">
            <h2 className="border-b-2 border-terminal-green">
                {categoryTitle}
            </h2>
            <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
                <ChallengeButton challengeTitle="Test Title" />
            </div>
        </section>
    );
}