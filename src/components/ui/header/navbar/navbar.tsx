"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Headset,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "Deals", href: "/deals" },
];

const categories = [
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Fashion", href: "/categories/fashion" },
  { name: "Home & Living", href: "/categories/home-living" },
  { name: "Beauty", href: "/categories/beauty" },
  { name: "Accessories", href: "/categories/accessories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setCategoryOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 shadow-sm backdrop-blur-md">
      {/* Announcement Bar */}
      <div className="hidden bg-zinc-950 px-4 py-2 text-center text-xs text-white sm:block">
        <span className="font-medium text-orange-400">Free Delivery</span> on
        selected orders — Shop smarter with Item Zone!
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-square btn-sm lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link href="/" onClick={closeMenu} className="flex items-center">
            <Image
              src="/itemzone.png"
              alt="Item Zone"
              width={220}
              height={100}
              priority
              className="h-11 w-auto object-contain md:h-12"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-orange-50 hover:text-[#FF6B00]"
            >
              {link.name}
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div className="dropdown dropdown-hover">
            <button
              type="button"
              tabIndex={0}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-orange-50 hover:text-[#FF6B00]"
            >
              Categories
              <ChevronDown size={15} />
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-60 rounded-2xl border border-zinc-100 bg-white p-2 shadow-xl"
            >
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="rounded-xl px-4 py-3 text-sm font-medium"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/deals"
            className="rounded-full px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Deals
          </Link>
        </nav>

        {/* Right: Search + Actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Search */}
          <Link
            href="/search"
            aria-label="Search products"
            className="btn btn-ghost btn-square btn-sm rounded-full text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00] md:btn-md"
          >
            <Search size={21} />
          </Link>

          {/* Wishlist */}
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="btn btn-ghost btn-square btn-sm hidden rounded-full text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00] sm:inline-flex md:btn-md"
          >
            <Heart size={21} />
          </Link>

          {/* Account */}
          <Link
            href="/account"
            aria-label="My account"
            className="btn btn-ghost btn-square btn-sm hidden rounded-full text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00] sm:inline-flex md:btn-md"
          >
            <UserRound size={21} />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="btn btn-ghost btn-square btn-sm relative rounded-full text-zinc-700 hover:bg-orange-50 hover:text-[#FF6B00] md:btn-md"
          >
            <ShoppingCart size={21} />
            <span className="badge badge-xs absolute right-0 top-0 border-0 bg-[#FF6B00] text-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-orange-50 hover:text-[#FF6B00]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Categories */}
              <button
                type="button"
                onClick={() => setCategoryOpen(!categoryOpen)}
                aria-expanded={categoryOpen}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-zinc-700 hover:bg-orange-50"
              >
                Categories
                <ChevronDown
                  size={17}
                  className={`transition-transform ${categoryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {categoryOpen && (
                <div className="ml-4 flex flex-col border-l-2 border-orange-100 pl-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      onClick={closeMenu}
                      className="rounded-lg px-4 py-2.5 text-sm text-zinc-600 hover:bg-orange-50 hover:text-[#FF6B00]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/deals"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-50"
              >
                Deals
              </Link>

              <div className="my-2 border-t border-zinc-100" />

              <Link
                href="/wishlist"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-orange-50"
              >
                <Heart size={19} />
                Wishlist
              </Link>

              <Link
                href="/account"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-orange-50"
              >
                <UserRound size={19} />
                My Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
