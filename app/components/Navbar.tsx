"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  return (
    <nav className="relative bg-grid bg-persian-blue-800 flex justify-between items-center h-20 md:h-30 px-4 md:px-8 text-shuttle-gray-50">
      {/* Left: logo */}
      <Link href="/">
        <img
          src="/images/logo.png"
          className="w-[110px] md:w-[171px] h-auto"
          alt="ByteSpace"
        />
      </Link>

      {/* Center: main links.
          Mobile: normal flow between logo and menu icon.
          Desktop: absolutely centered in the navbar. */}
      <ul className="flex gap-3 md:gap-4 text-sm md:text-base md:absolute md:left-1/2 md:-translate-x-1/2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Right: desktop actions */}
      <ul className="hidden md:flex gap-4 items-center">
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/signup">Join Us</Link>
        </li>
        <li>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBag />
          </Link>
        </li>
      </ul>

      {/* Right: mobile menu button */}
      <button
        className="md:hidden"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul className="absolute top-full inset-x-0 z-50 flex flex-col gap-4 px-4 py-5 bg-[#1537D8] md:hidden">
          <li>
            <Link href="/signin" onClick={() => setOpen(false)}>
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/signup" onClick={() => setOpen(false)}>
              Join Us
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
            >
              <ShoppingBag size={20} /> Cart
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
