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
  const [mobileOpen, setMobileOpen] = useState<null | "academics" | "portal">(
    null,
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger animation after first render
  }, []);

  return (
    <>
      {/* FULL NAVBAR (BEFORE SCROLL) */}
      <nav
        className={`
          fixed top-0 left-0  w-full z-50
          transition-all duration-500 text-slate-600
          ${scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-3 items-center">
          {/* LEFT */}
          <ul className="flex hidden lg:flex gap-6 justify-end items-center">
            <li
              className={`transform transition-all duration-500 ease-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              } delay-100`}
            >
              <Link
                href="/"
                className="px-5 py-2 rounded-full border-3 border-white text-white transition font-bold uppercase hover:bg-white hover:text-green-600 cursor-pointer"
              >
                Home
              </Link>
            </li>

            <li
              className={`relative group transform transition-all duration-500 ease-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              } delay-200`}
            >
              <button className="px-5 py-2 rounded-full border-3 border-white text-white flex items-center uppercase font-bold gap-1 cursor-pointer transition group-hover:bg-white group-hover:text-green-600">
                Academics <ChevronDown size={16} />
              </button>

              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
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
          <div className="flex justify-center items-center">
            <img src="/logo.png" className="w-14 h-14" alt="Logo" />
          </div>

          {/* RIGHT */}
          <ul className="flex hidden lg:flex gap-6 justify-start items-center">
            <li
              className={`transform transition-all duration-500 ease-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              } delay-300`}
            >
              <Link
                href="/admissions"
                className="px-5 py-2 rounded-full border-3 border-white text-white transition font-bold uppercase hover:bg-white hover:text-green-600 cursor-pointer"
              >
                Admissions
              </Link>
            </li>

            <li
              className={`relative group transform transition-all duration-500 ease-out ${
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              } delay-400`}
            >
              <button className="px-5 py-2 rounded-full border-3 border-white text-white flex items-center gap-1 cursor-pointer uppercase font-bold transition group-hover:bg-white group-hover:text-green-600">
                Portal <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-3 w-40 bg-white rounded-xl shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
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
      <div className="fixed inset-0 z-40 pointer-events-none">
        {/* OVERLAY */}
        <div
          className={`
      fixed inset-0 bg-black/40 backdrop-blur-sm
      transition-opacity duration-300
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
    `}
          onClick={() => setOpen(false)}
        />

        {/* SLIDE-IN MENU */}
        <div
          className={`
      fixed top-0 right-0 z-50
      h-full w-full sm:w-[420px]
      bg-green-600 text-white
      transition-transform duration-500 ease-in-out
      ${open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}
    `}
        >
          <div className="h-full flex flex-col px-8 pt-10 pb-16">
            <div className="flex items-center gap-4 mb-12">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
              <div>
                <h2 className="text-xl font-semibold leading-tight">KMSS </h2>
                <p className="text-sm opacity-80">GO HIGHER</p>
              </div>
            </div>

            <ul className="flex flex-col gap-6 text-2xl font-medium">
              {/* HOME */}
              <li
                className={`transform transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                } delay-100`}
              >
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>

              {/* ACADEMICS */}
              <li
                className={`transform transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                } delay-200`}
              >
                <button
                  onClick={() =>
                    setMobileOpen(
                      mobileOpen === "academics" ? null : "academics",
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Academics
                  <ChevronDown
                    className={`transition-transform ${
                      mobileOpen === "academics" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileOpen === "academics" && (
                  <div className="mt-4 ml-4 flex flex-col gap-3 text-lg opacity-90">
                    <Link
                      href="/academics/curriculum"
                      onClick={() => setOpen(false)}
                    >
                      Curriculum
                    </Link>
                    <Link
                      href="/academics/departments"
                      onClick={() => setOpen(false)}
                    >
                      Departments
                    </Link>
                  </div>
                )}
              </li>

              {/* ADMISSIONS */}
              <li
                className={`transform transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                } delay-300`}
              >
                <Link href="/admissions" onClick={() => setOpen(false)}>
                  Admissions
                </Link>
              </li>

              {/* PORTAL */}
              <li
                className={`transform transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                } delay-400`}
              >
                <button
                  onClick={() =>
                    setMobileOpen(mobileOpen === "portal" ? null : "portal")
                  }
                  className="flex items-center justify-between w-full"
                >
                  Portal
                  <ChevronDown
                    className={`transition-transform ${
                      mobileOpen === "portal" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileOpen === "portal" && (
                  <div className="mt-4 ml-4 flex flex-col gap-3 text-lg opacity-90">
                    <Link href="/portal/student" onClick={() => setOpen(false)}>
                      Student
                    </Link>
                    <Link href="/portal/staff" onClick={() => setOpen(false)}>
                      Staff
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
