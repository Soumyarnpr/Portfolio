import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const icons = {
  live: ExternalLink,
  github: GitBranch,
};

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-28 py-20">
      <SectionHeading eyebrow="Selected work" title="My Projects" />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card reveal group relative min-h-[430px] overflow-hidden rounded-lg bg-rich-black/70 shadow-2xl shadow-black/30"
          >
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="project-image object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 z-2 p-5">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="glass-chip px-3 py-1 text-xs font-bold text-baby-powder/86">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-extrabold text-imperial-red">{project.title}</h3>
              <p className="mt-3 min-h-[96px] text-base leading-6 text-baby-powder/82">
                {project.description}
              </p>
              <div className="mt-5 flex min-h-10 items-center gap-3">
                {project.links.length > 0 ? (
                  project.links.map((link) => {
                    const Icon = icons[link.type] ?? ExternalLink;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        title={link.label}
                        aria-label={`${project.title}: ${link.label}`}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-white/16 bg-white/10 text-baby-powder backdrop-blur transition hover:border-turquoise hover:text-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
                      >
                        <Icon size={18} aria-hidden="true" />
                      </a>
                    );
                  })
                ) : (
                  <span className="text-sm font-semibold text-baby-powder/56">Static build showcase</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
