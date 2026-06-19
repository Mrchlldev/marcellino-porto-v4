import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { CarCard } from "@/components/CarCard";
import { SectionHeader } from "@/components/SectionHeader";
import { aboutSettings, carSettings, contactSettings, educationSettings, heroSettings, projectSettings, skillsSettings } from "@/lib/settings/content";
import { siteSettings } from "@/lib/settings/site";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28">
      <div className="noise absolute inset-0 opacity-[0.04]" />
      <div className="absolute bottom-0 left-0 h-32 w-[200%] animate-road road-line opacity-20" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div data-aos="blur-up">
          <p className="mb-4 inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-red-300">{heroSettings.eyebrow}</p>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">{siteSettings.name}</h1>
          <h2 className="mt-5 font-display text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-white md:text-5xl">{heroSettings.title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{heroSettings.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={heroSettings.primaryButton.href} className="group rounded-full bg-white px-6 py-4 text-sm font-black uppercase text-zinc-950 transition hover:scale-105 hover:bg-red-500 hover:text-white">
              {heroSettings.primaryButton.label} <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link href={heroSettings.secondaryButton.href} className="rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase text-white transition hover:scale-105 hover:border-red-400 hover:bg-red-500/10">
              {heroSettings.secondaryButton.label}
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {heroSettings.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <p className="font-display text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[520px]" data-aos="blur-up">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-red-600/30 via-orange-500/10 to-white/5 blur-3xl" />
          <div className="relative h-full rounded-[3rem] border border-white/10 bg-zinc-950/70 p-8 shadow-panel backdrop-blur-xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-widest text-white">Drift Mode</span>
              <Sparkles className="text-orange-300" />
            </div>
            <div className="relative mt-20 h-56 animate-float rounded-[3rem] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-300 shadow-glow">
              <div className="absolute left-20 top-[-54px] h-28 w-64 skew-x-[-18deg] rounded-t-[3rem] bg-white/20 backdrop-blur" />
              <div className="absolute -bottom-10 left-14 h-24 w-24 rounded-full border-[14px] border-zinc-950 bg-white shadow-glow" />
              <div className="absolute -bottom-10 right-16 h-24 w-24 rounded-full border-[14px] border-zinc-950 bg-white shadow-glow" />
              <div className="absolute -right-9 bottom-8 h-12 w-28 skew-x-[-26deg] bg-white/25" />
              <div className="absolute -left-8 bottom-5 h-8 w-20 rounded-full bg-red-900/80" />
            </div>
            <div className="mt-24 grid gap-3 sm:grid-cols-2">
              {carSettings.cars.slice(0, 2).map((car) => (
                <div key={car.brand} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-red-300">{car.brand}</p>
                  <p className="mt-1 font-display text-xl font-black text-white">{car.model}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About" title={aboutSettings.title} subtitle={aboutSettings.subtitle} />
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel" data-aos="blur-up">
            <p className="font-display text-5xl font-black text-white">{siteSettings.role}</p>
            <p className="mt-5 text-zinc-400">{siteSettings.description}</p>
          </div>
          <div className="grid gap-5" data-aos="blur-up">
            {aboutSettings.paragraphs.map((text) => <p key={text} className="rounded-[2rem] border border-white/10 bg-zinc-950/60 p-7 leading-8 text-zinc-300">{text}</p>)}
            <div className="flex flex-wrap gap-3">
              {aboutSettings.highlights.map((item) => <span key={item} className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-200">{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skill" title={skillsSettings.title} subtitle={skillsSettings.subtitle} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillsSettings.items.map((skill) => (
            <div key={skill.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel transition hover:-translate-y-2 hover:border-red-400/50" data-aos="blur-up">
              <h3 className="font-display text-2xl font-black text-white">{skill.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{skill.description}</p>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-300" style={{ width: `${skill.level}%` }} />
              </div>
              <p className="mt-3 text-right text-sm font-black text-red-300">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Education" title={educationSettings.title} subtitle={educationSettings.subtitle} />
        <div className="grid gap-5">
          {educationSettings.items.map((item) => (
            <div key={item.school} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-panel transition hover:translate-x-2 hover:border-orange-300/50" data-aos="blur-up">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-red-300">{item.year}</p>
              <h3 className="mt-3 font-display text-3xl font-black text-white">{item.school}</h3>
              <p className="mt-1 text-lg font-bold text-orange-200">{item.major}</p>
              <p className="mt-3 text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Project" title={projectSettings.title} subtitle={projectSettings.subtitle} />
        <div className="grid gap-6 lg:grid-cols-3">
          {projectSettings.items.map((project) => (
            <Link key={project.title} href={project.href} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-panel transition hover:-translate-y-2 hover:border-red-400/60" data-aos="blur-up">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-red-300">{project.category}</p>
              <h3 className="mt-4 font-display text-3xl font-black text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-black text-zinc-950">{tag}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CarLineupSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Cars" title={carSettings.title} subtitle={carSettings.note} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {carSettings.cars.map((car) => <CarCard key={car.brand} {...car} />)}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title={contactSettings.title} subtitle={contactSettings.subtitle} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-panel" data-aos="blur-up">
            <h3 className="font-display text-3xl font-black text-white">{contactSettings.formTitle}</h3>
            <p className="mt-4 leading-8 text-zinc-400">{contactSettings.note}</p>
            <div className="mt-8 grid gap-4">
              <p className="flex items-center gap-3 text-zinc-300"><Mail className="text-red-300" /> {siteSettings.email}</p>
              <p className="flex items-center gap-3 text-zinc-300"><Phone className="text-red-300" /> {siteSettings.phone}</p>
              <p className="flex items-center gap-3 text-zinc-300"><MapPin className="text-red-300" /> {siteSettings.location}</p>
            </div>
          </div>
          <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 shadow-panel" data-aos="blur-up">
            <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition focus:border-red-400" placeholder="Your name" />
            <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition focus:border-red-400" placeholder="Your email" />
            <textarea className="min-h-40 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition focus:border-red-400" placeholder="Your message" />
            <button type="button" className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-400 px-6 py-4 font-black uppercase text-white transition hover:scale-[1.02]">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
