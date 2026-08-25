"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#curriculum", label: "What We'll Do" },
  { href: "/#selection", label: "Selection" },
  { href: "/#mentors", label: "Mentors" },
  { href: "/#supporters", label: "Supporters" },
  { href: "/code-of-conduct", label: "Code of Conduct" },
  { href: "/#join", label: "Join Us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-amber font-display text-sm font-bold text-white">
            PSF
          </span>
          <span className="font-display text-lg font-bold text-brand-dark">
            Refugee Python Skills Workshop
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-brand-dark-soft transition hover:text-brand-amber"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#join"
            className="rounded-md bg-brand-amber px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-amber-dark"
          >
            Join Us
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-semibold text-brand-dark hover:bg-brand-amber-tint"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-md bg-brand-amber px-3 py-2 text-center font-bold text-white"
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
}
