"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/videos", label: "Videos" },
  { href: "/photos", label: "Photos" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e5e4] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 sm:gap-3 font-semibold tracking-tight"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fb7185] sm:h-10 sm:w-10">
            <Heart className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm font-bold text-[#292524] sm:text-base">
            emmaxolouise
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#44403c] transition-all hover:bg-[#fdf2f8] hover:text-[#fb7185] sm:px-4 sm:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side - Subscribe Button & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.youtube.com/@emmaxolouise"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#fb7185] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#f43f5e] hover:shadow-md sm:px-6 sm:py-2.5 sm:text-base md:inline-flex"
          >
            Subscribe
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#44403c] transition-colors hover:bg-[#fdf2f8] hover:text-[#fb7185] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#e7e5e4] bg-white md:hidden">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-[#44403c] transition-colors hover:bg-[#fdf2f8] hover:text-[#fb7185]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@emmaxolouise"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 rounded-full bg-[#fb7185] px-4 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-[#f43f5e]"
            >
              Subscribe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
