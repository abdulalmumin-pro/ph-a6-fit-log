"use client";

import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathName === "/" ? "text-[#C2F800] bg-base-100" : ""}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myPlan"
          className={pathName === "/myPlan" ? "text-[#C2F800] bg-base-100" : ""}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar border-b-2 border-base-100 sticky top-0 z-30 bg-[#0B1020] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="FitLog Logo"
            className="w-8 h-8 sm:w-9 sm:h-9"
          />

          <span className="hidden sm:block text-xl font-bold">FITLOG</span>
        </Link>
      </div>

      {/* CENTER NAVIGATION */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        <div className="flex items-center gap-5 sm:gap-8">
          {/* PLAN */}
          <Link
            href="/myPlan"
            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-xl text-gray-400 hover:text-white transition"
          >
            <span>Plan</span>

            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C2F800] text-black text-xs font-medium">
              0
            </span>
          </Link>

          {/* SAVED */}
          <Link
            href="/myPlan"
            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-xl text-gray-400 hover:text-white transition"
          >
            <span>Saved</span>

            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-700 text-xs text-gray-300">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
