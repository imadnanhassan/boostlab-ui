"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "হোম" },
  { href: "/services", label: "সার্ভিস" },
  { href: "/pricing", label: "মূল্য তালিকা" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/contact", label: "যোগাযোগ" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          BoostLab
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`navlink ${pathname === l.href ? "text-white" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn hidden sm:inline-flex">
            অর্ডার করুন
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}