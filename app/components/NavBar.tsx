"use client";

import { useEffect, useState } from "react";
import { ChevronDownCircle, Home, Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* MOBILE */}
        <div className="flex items-center justify-between lg:hidden">
          <img src="/logo.png" className="w-12 h-12" alt="KMSS Logo" />

          <button
            onClick={() => setOpen(!open)}
            className={scrolled ? "text-green-600" : "text-white"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-3 items-center">
          {/* Left menu */}
          <ul className="flex gap-8 justify-end items-center font-medium">
            <li>
              <Home
                strokeWidth={1}
                className={`w-7 h-7 cursor-pointer ${
                  scrolled ? "text-green-600" : "text-white"
                }`}
              />
            </li>
            <li>
              <Link
                href="/academics"
                className={`px-5 py-2 rounded-full transition
                  ${
                    scrolled
                      ? "text-green-700 hover:bg-green-100"
                      : "text-white bg-green-500 hover:bg-green-600"
                  }
                `}
              >
                ACADEMICS
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`px-5 py-2 rounded-full transition
                  ${
                    scrolled
                      ? "text-green-700 hover:bg-green-100"
                      : "text-white bg-green-500 hover:bg-green-600"
                  }
                `}
              >
                ABOUT
              </Link>
            </li>
          </ul>

          {/* Center logo (axis anchor) */}
          <div className="flex justify-center">
            <img src="/logo.png" className="w-14 h-14" alt="KMSS Logo" />
          </div>

          {/* Right menu */}
          <ul className="flex gap-8 justify-start items-center font-medium">
            <li>
              <Link
                href="/admissions"
                className={`px-5 py-2 rounded-full transition
                  ${
                    scrolled
                      ? "text-green-700 hover:bg-green-100"
                      : "text-white bg-green-500 hover:bg-green-600"
                  }
                `}
              >
                ADMISSIONS
              </Link>
            </li>
            <li>
              <Link
                href="/portal"
                className={`px-5 py-2 rounded-full transition
                  ${
                    scrolled
                      ? "text-green-700 hover:bg-green-100"
                      : "text-white bg-green-500 hover:bg-green-600"
                  }
                `}
              >
                PORTAL
              </Link>
            </li>
            <li>
              <ChevronDownCircle
                strokeWidth={1}
                className={`w-7 h-7 cursor-pointer ${
                  scrolled ? "text-green-600" : "text-white"
                }`}
              />
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {["Home", "Academics", "About", "Admissions", "Portal"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-green-700 text-lg"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
