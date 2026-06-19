export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center" data-aos="blur-up">
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-red-400">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-black uppercase tracking-tight text-white md:text-6xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-400">{subtitle}</p>
    </div>
  );
}
