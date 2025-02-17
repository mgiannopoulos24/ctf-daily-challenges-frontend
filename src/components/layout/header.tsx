"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Checkbox from "@/components/other/checkbox";
import Image from "next/image";
import HackerIcon from "@/assets/images/hacker.svg"
import "@/scss/components/header.component.scss";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFullPage, setIsFullPage] = useState(typeof window !== "undefined" && window.innerWidth > 1024);

  const checkScreenSize = () => {
    setIsFullPage(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isFullPage && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  }, [isFullPage]);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open); 
  };

  return (
    <header className="bg-black h-[60px] border-b-2 border-terminal-green flex justify-center">
      <nav className="container flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="flex justify-center items-center h-[40px] w-[60px] text-xs">
          <Image className="logo" src={HackerIcon} alt="Hacker Logo"/>
          </div>
          <div className="hidden md:flex text-terminal-green text-2xl gap-2 items-center font-medium">
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
        <div className="hidden md:flex text-terminal-green text-2xl gap-2 items-center font-medium">
          <Link className="p-2" href="/login">
            Log In
          </Link>
          <Link className="p-2" href="/register">
            Register
          </Link>
        </div>
        {!isFullPage && (
          <div className="md:hidden">
            <Checkbox onClick={() => toggleDrawer(!isDrawerOpen)()} />
          </div>
        )}
      </nav>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)} 
        transitionDuration={isFullPage ? 0 : 250} 
        PaperProps={{ className: 'drawer' }}
      >
        <div className="flex flex-col text-terminal-green text-2xl gap-4 p-4 bg-black h-full drawer-links">
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
          <Link className="p-2" href="/login">
            Log In
          </Link>
          <Link className="p-2" href="/register">
            Register
          </Link>
        </div>
      </Drawer>
    </header>
  );
}