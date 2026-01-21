"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (window.scrollY > 80) setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FULL NAVBAR (BEFORE SCROLL) */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 text-slate-600
          ${scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
          {/* LEFT */}
          <ul className="flex gap-6 justify-end items-center">
            <li>
              <Link
                href="/"
                className="px-5 py-2 rounded-full border-3 border-white
                text-white transition italic uppercase hover:bg-white hover:text-green-600 cursor-pointer"
              >
                Home
              </Link>
            </li>

            {/* DROPDOWN */}
            <li className="relative group">
              <button
                className="px-5 py-2 rounded-full border-3 border-white
                text-white flex items-center uppercase italic gap-1 cursor-pointer
                transition group-hover:bg-white group-hover:text-green-600"
              >
                Academics <ChevronDown size={16} />
              </button>

              <div
                className="
                  absolute right-0 mt-3 w-48
                  bg-white rounded-xl shadow-lg
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                "
              >
                <Link className="block px-4 py-3 hover:bg-green-50" href="#">
                  Curriculum
                </Link>
                <Link className="block px-4 py-3 hover:bg-green-50" href="#">
                  Departments
                </Link>
              </div>
            </li>
          </ul>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <img src="/logo.png" className="w-14 h-14" alt="Logo" />
          </div>

          {/* RIGHT */}
          <ul className="flex gap-6 justify-start items-center">
            <li>
              <Link
                href="/admissions"
                className="px-5 py-2 rounded-full border-3 border-white
                text-white transition italic uppercase hover:bg-white hover:text-green-600 cursor-pointer"
              >
                Admissions
              </Link>
            </li>

            <li className="relative group">
              <button
                className="px-5 py-2 rounded-full border-3 border-white
                text-white flex items-center gap-1 cursor-pointer uppercase italic
                transition group-hover:bg-white group-hover:text-green-600"
              >
                Portal <ChevronDown size={16} />
              </button>

              <div
                className="
                  absolute left-0 mt-3 w-40
                  bg-white rounded-xl shadow-lg
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                "
              >
                <Link className="block px-4 py-3 hover:bg-green-50" href="#">
                  Student
                </Link>
                <Link className="block px-4 py-3 hover:bg-green-50" href="#">
                  Staff
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* FLOATING HAMBURGER (AFTER SCROLL) */}
      {scrolled && (
        <button
          onClick={() => setOpen(!open)}
          className="
            fixed top-6 right-6 z-50
            w-14 h-14 rounded-full
            bg-green-600 text-white
            flex items-center justify-center
            shadow-xl
          "
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* CIRCULAR REVEAL WITH VERTICAL MENU */}
      <div
        className={`
          fixed bottom-6 inset-0 z-40
          pointer-events-none
          ${open ? "pointer-events-auto" : ""}
        `}
      >
        <div
          className={`
            absolute
            w-[120vmax] h-[120vmax]
            rounded-full bg-green-600
            transition-transform duration-700 ease-out
            ${open ? "scale-100" : "scale-0"}
          `}
          style={{ transformOrigin: "top right" }}
        />

        <div
          className={`
            absolute inset-0
            flex items-center justify-center
            transition-opacity duration-500 delay-300
            ${open ? "opacity-100" : "opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-8 text-center">
            {["Home", "Academics", "About", "Admissions", "Portal"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-white text-3xl font-medium hover:scale-110 transition"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
