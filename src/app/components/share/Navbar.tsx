"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png"
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link className={`${pathName === '/workouts' ? 'text-[#C2F800]' : ''}`}  href="/workouts">Workouts</Link>
      </li>
      <li>
        <Link className={`${pathName === '/myPlan' ? 'text-[#C2F800]' : ''}`} href="/myPlan">My Plan</Link>
      </li>
    </>
  );

  return (
    <div className="navbar border-b-2 border-base-100 sticky top-0 z-30 px-8 bg-[#0B1020]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <Image
        src={Logo}
        alt="Logo"
        ></Image>
        <Link href="/" className="btn btn-ghost text-xl">FITLOG</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end gap-8">
        <button>Plan</button>
        <button>Saved</button>
      </div>
    </div>
  );
};

export default Navbar;
