"use client";

import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = ['my-learning', 'learn']
  const navLinks = navItems.map((item) => {
    return <>
      <Link
        href={`/${item}`}
        className="text-sm font-medium text-gray-700 transition hover:text-violet-600"
      >
        {item}
      </Link>
    </>
  })


  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white">
            L
          </div>

          <span className="text-2xl font-bold text-gray-900">
            LearnHub
          </span>
        </Link>


        {/* Search */}

        <div className="mx-8 hidden flex-1 lg:flex">
          <div className="flex w-full items-center rounded-full border border-gray-300 bg-gray-50 px-5 transition focus-within:border-violet-600 focus-within:bg-white">
            <Search
              className="text-gray-500"
              size={18}
            />

            <input
              type="text"
              placeholder="Search for anything..."
              className="h-12 w-full bg-transparent px-4 text-sm outline-none"
            />
          </div>
        </div>

        {/* Desktop Links */}

        <nav className="hidden items-center gap-7 lg:flex">
          {/* Categories */}

          <button className="hidden items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-violet-600 lg:flex">
            Categories
            <ChevronDown size={16} />
          </button>
          {navLinks.map((link) => link)}

          <Link href={'/cart'} className="transition hover:text-violet-600">
            <ShoppingCart size={22} />
          </Link>

          <Link href={'/login'} className="rounded-lg border border-gray-300 px-5 py-2 font-semibold transition hover:border-violet-600 hover:text-violet-600">
            Log in
          </Link>

          <Link href={'/register'} className="rounded-lg bg-violet-600 px-5 py-2 font-semibold text-white transition hover:bg-violet-700">
            Sign up
          </Link>
        </nav>



        {/* ============================= FOR RESPONSIVE DESIGN ============================= */}
        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenu && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-4 p-6">
            <input
              placeholder="Search..."
              className="w-full rounded-lg border p-3 outline-none focus:border-violet-600"
            />

            <Link
              href="#"
              className="block"
            >
              Categories
            </Link>

            <Link
              href="#"
              className="block"
            >
              My Learning
            </Link>

            <Link
              href="#"
              className="block"
            >
              Teach
            </Link>

            <button className="w-full rounded-lg border py-3">
              Log in
            </button>

            <button className="w-full rounded-lg bg-violet-600 py-3 text-white">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}