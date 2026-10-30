
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  UserRound,
} from "lucide-react";

const navLinks = [
  { name: "হোম", href: "/" },
  { name: "সকল পণ্য", href: "/products" },
  { name: "ক্যাটাগরি", href: "/categories" },
  { name: "বিশেষ অফার", href: "/deals" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#111318] px-4 py-2 text-center text-xs text-white sm:text-sm">
        আপনার পছন্দের সব পণ্য এখন এক ঠিকানায় —{" "}
        <Link
          href="/products"
          className="font-bold text-orange-400 hover:underline"
        >
          ঘুরে দেখুন
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="navbar mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-square bg-white text-zinc-800 hover:bg-zinc-100 lg:hidden"
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/itemzone.png"
              alt="Item Zone Logo"
              width={180}
              height={65}
              priority
              className="h-11 w-auto object-contain sm:h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 bg-white px-1 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg text-zinc-700 transition-colors hover:bg-orange-50 hover:text-[#FF6B00]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navbar End */}
        <div className="navbar-end gap-1 bg-white sm:gap-2">
          {/* Search */}
          <Link
            href="/search"
            className="btn btn-ghost btn-circle bg-white text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00]"
            aria-label="খুঁজুন"
          >
            <Search size={21} />
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="btn btn-ghost btn-circle hidden bg-white text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00] sm:inline-flex"
            aria-label="পছন্দের তালিকা"
          >
            <Heart size={21} />
          </Link>

          {/* Account */}
          <Link
            href="/login"
            className="btn btn-ghost btn-circle hidden bg-white text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00] sm:inline-flex"
            aria-label="আমার অ্যাকাউন্ট"
          >
            <UserRound size={21} />
          </Link>

          {/* Shopping Cart */}
          <Link
            href="/cart"
            className="btn btn-ghost btn-circle relative bg-white text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00]"
            aria-label="শপিং কার্ট"
          >
            <ShoppingCart size={21} />

            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#FF6B00] px-1 text-[10px] text-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-zinc-100 bg-white px-4 py-3 lg:hidden">
          <ul className="menu w-full gap-1 bg-white p-0 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00]"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00]"
              >
                <Heart size={18} />
                পছন্দের তালিকা
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00]"
              >
                <UserRound size={18} />
                আমার অ্যাকাউন্ট
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
