import Image from "next/image";
import { ArrowDown, Download, Send } from "lucide-react";
import AnimatedWord from "@/components/AnimatedWord";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell flex min-h-screen items-center pt-24 pb-16 md:pt-32"
    >
      <div className="grid w-full items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="hero-photo order-1">
          <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px]">
            <div className="hero-photo-frame absolute inset-0 translate-x-3 translate-y-3 bg-orange-peel/80 blur-sm md:translate-x-5 md:translate-y-5" />
            <div className="hero-photo-frame absolute inset-0 -translate-x-2 -translate-y-2 border border-turquoise/60 md:-translate-x-3 md:-translate-y-3" />
            <div className="hero-photo-frame relative h-full overflow-hidden border border-white/20 bg-white/10 shadow-2xl shadow-black/40">
              <Image
                src={profile.photo}
                alt="Soumya Ranjan Parida"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hero-copy order-2 text-center lg:text-left">
          <p className="hero-kicker mb-5 inline-flex max-w-full glass-chip px-4 py-2 text-center text-xs font-bold uppercase text-turquoise sm:text-sm">
            Developer | Programmer | Student
          </p>
          <h1 className="hero-title mx-auto max-w-4xl break-words text-[2.05rem] font-extrabold leading-[1.08] text-baby-powder sm:text-5xl md:text-6xl lg:mx-0">
            {profile.greeting} I am a <AnimatedWord words={profile.roleWords} />
          </h1>
          <p className="hero-lead mx-auto mt-5 max-w-2xl text-base leading-7 text-baby-powder/78 md:mt-6 md:text-xl md:leading-8 lg:mx-0">
            {profile.heroLead}
          </p>

          <div className="hero-actions mx-auto mt-7 flex max-w-[340px] flex-col gap-3 sm:max-w-none sm:flex-row lg:mx-0">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-turquoise px-6 py-3 text-base font-bold text-rich-black transition hover:bg-orange-peel focus:outline-none focus-visible:ring-2 focus-visible:ring-baby-powder"
            >
              <ArrowDown size={18} aria-hidden="true" />
              View Projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3 text-base font-bold text-baby-powder backdrop-blur transition hover:border-orange-peel hover:text-orange-peel focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
            >
              <Send size={18} aria-hidden="true" />
              Contact Me
            </a>
            <a
              href={profile.resume}
              download="SOUMYA RANJAN PARIDA RESUME"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3 text-base font-bold text-baby-powder backdrop-blur transition hover:border-turquoise hover:text-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
            >
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
          </div>

          <div className="hero-stats mx-auto mt-8 grid max-w-[340px] grid-cols-3 gap-2 md:max-w-2xl md:gap-3 lg:mx-0">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="glass-panel px-3 py-4 text-center md:px-4 md:py-5">
                <p className="text-2xl font-extrabold text-orange-peel md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-baby-powder/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
