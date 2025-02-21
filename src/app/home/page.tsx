"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [userStats, setUserStats] = useState({
    score: 0,
    rank: 'N/A',
    challengesSolved: 0,
  });
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, username: 'Player1', score: 5000 },
    { rank: 2, username: 'Player2', score: 4500 },
    { rank: 3, username: 'Player3', score: 4200 },
  ]);

  useEffect(() => {
    // Simulate fetching user stats from an API or local storage
    const fetchUserStats = async () => {
      const isLoggedIn = localStorage.getItem('authToken');

      if (isLoggedIn) {
        // Simulate API call
        setTimeout(() => {
          setUserStats({
            score: 1500,
            rank: 27,
            challengesSolved: 32,
          });
        }, 500); // Simulate delay
      } else {
        setUserStats({
          score: 0,
          rank: 'N/A',
          challengesSolved: 0,
        });
      }
    };

    const fetchLeaderboard = async () => {
      // Simulate fetching leaderboard data from backend
      setTimeout(() => {
        const leaderboardData = [
          { rank: 1, username: 'HackerAce', score: 6000 },
          { rank: 2, username: 'CodeCrusher', score: 5500 },
          { rank: 3, username: 'ByteBandit', score: 5200 },
        ];
        setLeaderboard(leaderboardData);
      }, 300); // Simulate delay
    };

    fetchUserStats();
    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to CTF Daily Challenges!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Daily Challenge Overview */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200">
          <h2 className="text-xl font-semibold mb-2">🔥 Today's Challenge 🔥</h2>
          <p>Challenge Title: Decrypt the Message</p>
          <p>Category: Cryptography</p>
          <p>Points: 150</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
            Accept Challenge
          </button>
        </div>

        {/* User Statistics */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Your Hacker Stats 💻</h2>
          <p>Score: <span className="font-bold">{userStats.score}</span></p>
          <p>Rank: <span className="font-bold">{userStats.rank}</span></p>
          <p>Challenges Solved: <span className="font-bold">{userStats.challengesSolved}</span></p>
          <p>Keep hacking!</p>
        </div>

        {/* Leaderboard Snippet */}
        <div className="bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Top Hackers 🏆</h2>
          <ul>
            {leaderboard.map((player) => (
              <li key={player.rank}>
                {player.rank}. {player.username} - {player.score}
              </li>
            ))}
          </ul>
          <a href="/leaderboard" className="text-blue-500 hover:underline">
            View Full Leaderboard
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>
          Ready to test your skills? Head over to the{' '}
          <a href="/challenges" className="text-blue-500 hover:underline">
            Challenges
          </a>{' '}
          page and prove your worth!
        </p>
      </div>
    </div>
  );
}