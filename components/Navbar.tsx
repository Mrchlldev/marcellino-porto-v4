"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteSettings } from "@/lib/settings/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-red-600 to-orange-400 font-display text-xl font-black text-white shadow-glow transition group-hover:rotate-6">M</span>
          <span className="font-display text-lg font-black uppercase tracking-wide text-white">{siteSettings.name}</span>
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {siteSettings.navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-zinc-950 ${active ? "bg-white text-zinc-950" : "text-zinc-300"}`}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 text-white lg:hidden" aria-label="Toggle Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {siteSettings.navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-zinc-950">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
