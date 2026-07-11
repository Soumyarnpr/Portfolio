import Image from "next/image";
import { ArrowDown, Download, Send } from "lucide-react";
import AnimatedWord from "@/components/AnimatedWord";
import { profile } from "@/data/portfolio";

export default function Hero() {
	return (
		<section
			id="home"
			className="hero-section section-shell flex min-h-svh items-center pt-21 pb-10 md:min-h-screen md:pt-32 md:pb-16"
		>
			<div className="hero-layout grid w-full items-center gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
				<div className="hero-photo order-1">
					<div className="hero-photo-wrap relative mx-auto aspect-square w-full max-w-55 sm:max-w-[320px] md:max-w-105">
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
					<h1 className="hero-title mx-auto max-w-4xl wrap-break-word text-[1.82rem] font-extrabold leading-[1.06] text-baby-powder sm:text-4xl md:text-6xl lg:mx-0">
						{profile.greeting} I am a{" "}
						<AnimatedWord words={profile.roleWords} />
					</h1>
					<p className="hero-lead mx-auto mt-4 max-w-2xl text-[0.95rem] leading-6 text-baby-powder/78 md:mt-6 md:text-xl md:leading-8 lg:mx-0">
						{profile.heroLead}
					</p>

					<div className="hero-actions mx-auto mt-5 flex max-w-85 flex-col gap-2 sm:max-w-none sm:flex-row sm:gap-3 md:mt-7 lg:mx-0">
						<a
							href="#projects"
							className="hero-action-link inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-turquoise px-5 py-2.5 text-sm font-bold text-rich-black transition hover:bg-orange-peel focus:outline-none focus-visible:ring-2 focus-visible:ring-baby-powder sm:text-base"
						>
							<ArrowDown size={18} aria-hidden="true" />
							View Projects
						</a>
						<a
							href={`mailto:${profile.email}`}
							className="hero-action-link inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-2.5 text-sm font-bold text-baby-powder backdrop-blur transition hover:border-orange-peel hover:text-orange-peel focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise sm:text-base"
						>
							<Send size={18} aria-hidden="true" />
							Contact Me
						</a>
						<a
							href={profile.resume}
							download="SOUMYA RANJAN PARIDA RESUME"
							className="hero-action-link inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-2.5 text-sm font-bold text-baby-powder backdrop-blur transition hover:border-turquoise hover:text-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise sm:text-base"
						>
							<Download size={18} aria-hidden="true" />
							Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
