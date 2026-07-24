"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Technology", href: "#technology" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-900/8 bg-softwhite/85 backdrop-blur-md shadow-[0_2px_20px_rgba(7,26,43,0.05)]"
          : "border-b border-transparent bg-softwhite/0"
      }`}
    >
      <nav
        className="container-pad flex h-[72px] items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className={scrolled ? "text-ink" : "text-white"}
          aria-label="ColdProof home"
        >
          <Logo mono={!scrolled} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-cyan ${
                  scrolled ? "text-ink/70" : "text-ice/75"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#live-demo"
            className={scrolled ? "btn-secondary" : "btn-ghost-dark"}
          >
            View the live demo
          </a>
          <a href="#request-a-pilot" className="btn-primary">
            Request a pilot
          </a>
        </div>

        <button
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
            scrolled
              ? "border-navy-900/10 text-ink"
              : "border-white/20 text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="container-pad flex flex-col gap-1 border-t border-navy-900/8 bg-softwhite pb-6 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-navy-900/5 hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="#live-demo"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full"
              >
                View the live demo
              </a>
              <a
                href="#request-a-pilot"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Request a pilot
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
