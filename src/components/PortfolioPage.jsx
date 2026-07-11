"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PortfolioPage() {
  const root = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(".accent-line", { scaleX: 1 });
        return;
      }

      const heroTimeline = gsap.timeline({
        defaults: { duration: 0.9, ease: "power3.out" },
      });

      heroTimeline
        .from(".hero-kicker", { y: 18, autoAlpha: 0 })
        .from(".hero-title", { y: 28, autoAlpha: 0 }, "-=0.55")
        .from(".hero-lead", { y: 24, autoAlpha: 0 }, "-=0.5")
        .from(".hero-actions", { y: 16, duration: 0.7 }, "-=0.35")
        .from(".hero-photo", { scale: 0.92, rotate: -2, autoAlpha: 0 }, "-=1");

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 46,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".accent-line").forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
          },
        });
      });

      gsap.utils.toArray(".project-card").forEach((card) => {
        const image = card.querySelector(".project-image");

        if (!image) {
          return;
        }

        gsap.to(image, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
