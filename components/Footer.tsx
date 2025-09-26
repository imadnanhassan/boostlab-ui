import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} BoostLab. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link className="navlink" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link>
          <Link className="navlink" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
          <Link className="navlink" href="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer">WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}