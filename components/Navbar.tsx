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
    <header className="sticky top-0 z-50 border-b border-default backdrop-blur bg-surface-0/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          BoostLab
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`navlink ${active ? "text-foreground" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
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