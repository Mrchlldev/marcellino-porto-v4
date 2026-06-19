import Link from "next/link";
import { siteSettings } from "@/lib/settings/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-black text-white">{siteSettings.name}</h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">{siteSettings.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {siteSettings.navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-zinc-400 transition hover:text-white">{link.label}</Link>)}
        </div>
      </div>
    </footer>
  );
}
