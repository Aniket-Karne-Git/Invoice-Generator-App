"use client";

import Link from "next/link";
import ThemeLink from "./ThemeLink";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-16 text-slate-50">
        <Link className="font-bold text-2xl md:text-4xl " href="/">
          Invoicer
        </Link>

        <nav className="hidden sm:flex items-center gap-3">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Free Tools</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/login">Log in</Link>
          <ThemeLink
            href="/register"
            className="bg-rose-500 text hover:bg-rose-600 focus:ring-rose-300"
            title="Register"
          />
        </div>
        {/* Humberg-menu*/}
        <button
          className="sm:hidden"
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <BiMenu className="text-3xl" />
        </button>
      </header>
      <div
        className={`${
          showSidebar
            ? "sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen right-0 z-50 top-0 p-2 text-slate-50"
            : " hidden sm:hidden fixed w-36 bg-slate-800 bg-opacity-90 h-screen right-0 z-50 top-0 p-2 text-slate-50"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-bold">Invoicer</h2>
          <button
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <AiOutlineClose className="text-2xl " />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-3 mb-10">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Free Tools</Link>
        </nav>
        <div className="flex flex-col items-start gap-4">
          <Link href="/login">Log in</Link>
          <ThemeLink
            href="/register"
            className="bg-rose-500 text hover:bg-rose-600 focus:ring-rose-300"
            title="Register"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
