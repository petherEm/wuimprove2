"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-black/70 h-[80px] max-w-7xl flex items-center justify-between mx-auto">
      <Link href="/" className="flex flex-col items-center">
        <Image src="/wulogo.svg" width={220} height={220} />
        <p className="hidden md:inline-block text-white text-center text-[13px]">
          Ideation phase - coded by Piotr
        </p>
      </Link>

      <div className="hidden md:flex items-center space-x-4 text-white">
        <Link href="/send" className="md:text-sm lg:text-xl">
          Send Money
        </Link>

        <Link href="/" className="md:text-sm lg:text-xl">
          Track a transfer
        </Link>

        <Link href="/banknew/receivemoney" className="md:text-sm lg:text-xl">
          Receive Money
        </Link>

        <div className="hover:bg-slate-500 p-2">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1">
              <GiHamburgerMenu className="text-4xl text-yellow-400" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-black w-52 z-50"
            >
              <li>
                <p className="text-red-400">Find locations</p>
              </li>
              <li>
                <p className="text-red-400">Help</p>
              </li>
              <li>
                <p className="text-red-400">Profile</p>
              </li>
              <li>
                <Link href="/register" className="text-green-400">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/receiver" className="text-green-400">
                  Receiver/SMS
                </Link>
              </li>
              <li>
                <Link href="/receipt" className="text-green-400">
                  Receipt
                </Link>
              </li>
              <hr className="h-1 " />
              <p className="text-secondary underline font-bold">New Flow</p>
              <li>
                <Link href="/" className="text-green-400">
                  Landing
                </Link>
              </li>
              <li>
                <Link href="/send" className="text-green-400">
                  SMO
                </Link>
              </li>
              <li>
                <Link href="/new-send-to-bank" className="text-green-400">
                  Receiver/Review/Receipt
                </Link>
              </li>

              <hr className="h-1 " />
              <p className="text-secondary underline font-bold">
                Digital Bank assets
              </p>
              <li>
                <Link href="/bank" className="text-orange-400">
                  Bank
                </Link>
              </li>
              <li>
                <Link href="/banknew" className="text-orange-400">
                  Bank Alternative
                </Link>
              </li>

              <li>
                <Link href="/appflow" className="text-orange-400">
                  App NEW flow
                </Link>
              </li>
              <hr className="h-1 " />
              <li>
                <Link href="/tracker" className="text-green-400">
                  Tracker
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/" className="flex items-center hover:bg-slate-500 p-2">
          <div className="dropdown dropdown-hover bg-transparent z-50">
            <label tabIndex={0} className="btn m-1">
              <TbWorld className="text-yellow-400 text-4xl mx-4" />
              EN
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-black w-52"
            >
              <li>
                <p>English</p>
              </li>
              <li>
                <p>German</p>
              </li>
            </ul>
          </div>
        </Link>

        <Link href="/register">Register</Link>
        <Link
          href="/register"
          className="border-2 border-yellow-400 rounded-full px-4 py-2 text-yellow-400 hover:text-yellow-600"
        >
          Log in
        </Link>
      </div>

      {/* MOBILE NAV */}

      <div className="md:hidden flex items-center space-x-4 text-white">
        <div className="hover:bg-slate-500 p-2">
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover z-50">
            <label tabIndex={0} className="btn m-1">
              <GiHamburgerMenu className="text-4xl text-yellow-400" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-black w-52"
            >
              <li>
                <p>Find locations</p>
              </li>
              <li>
                <p>Help</p>
              </li>
              <li>
                <p>Profile</p>
              </li>
              <hr className="h-1 " />
              <p className="text-secondary underline font-bold">New Flow</p>
              <li>
                <Link href="/" className="text-green-400">
                  Landing
                </Link>
              </li>
              <li>
                <Link href="/send" className="text-green-400">
                  SMO
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-green-400">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/receiver" className="text-green-400">
                  Receiver
                </Link>
              </li>
              <li>
                <Link href="/receipt" className="text-green-400">
                  Receipt
                </Link>
              </li>

              <hr className="h-1 " />
              <p className="text-secondary underline font-bold">
                Digital Bank assets
              </p>
              <li>
                <Link href="/bank" className="text-orange-400">
                  Bank
                </Link>
              </li>
              <li>
                <Link href="/banknew" className="text-orange-400">
                  Bank New
                </Link>
              </li>
              <li>
                <Link href="/digitalbanksend" className="text-orange-400">
                  Send to WUDB
                </Link>
              </li>
              <li>
                <Link href="/appflow" className="text-orange-400">
                  App NEW flow
                </Link>
              </li>
              <li>
                <Link href="/tracker" className="text-indigo-400">
                  Tracker
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
