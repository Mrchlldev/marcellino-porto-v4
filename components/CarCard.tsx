export function CarCard({ brand, model, accent }: { brand: string; model: string; accent: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel transition duration-500 hover:-translate-y-2 hover:border-red-400/50" data-aos="blur-up">
      <div className={`absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-3xl transition group-hover:opacity-70`} />
      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-zinc-400">{brand}</p>
        <h3 className="mt-2 font-display text-2xl font-black text-white">{model}</h3>
        <div className="mt-7 h-24 rounded-3xl bg-zinc-950/80 p-4">
          <div className={`relative mx-auto mt-6 h-10 max-w-[260px] rounded-t-[80px] bg-gradient-to-r ${accent} shadow-glow`}>
            <div className="absolute left-8 top-[-18px] h-8 w-28 skew-x-[-22deg] rounded-t-2xl bg-white/20" />
            <div className="absolute -bottom-4 left-8 h-10 w-10 rounded-full border-4 border-zinc-900 bg-zinc-200" />
            <div className="absolute -bottom-4 right-8 h-10 w-10 rounded-full border-4 border-zinc-900 bg-zinc-200" />
            <div className="absolute -right-4 bottom-1 h-4 w-12 skew-x-[-25deg] bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
