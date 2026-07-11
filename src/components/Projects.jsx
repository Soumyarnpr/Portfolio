"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, GitBranch, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const icons = {
	live: ExternalLink,
	github: GitBranch,
};

const DESCRIPTION_LIMIT = 135;

export default function Projects() {
	const [activeProject, setActiveProject] = useState(null);

	useEffect(() => {
		if (!activeProject) {
			return;
		}

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setActiveProject(null);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeProject]);

	return (
		<section id="projects" className="section-shell scroll-mt-28 py-20">
			<SectionHeading eyebrow="Selected work" title="My Projects" />

			<div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
				{projects.map((project) => {
					const hasLongDescription =
						project.description.length > DESCRIPTION_LIMIT;

					return (
						<article
							key={project.title}
							className="project-card reveal group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-lg border border-white/12 bg-rich-black/88 shadow-2xl shadow-black/28 transition duration-300 ease-out hover:-translate-y-2 hover:border-turquoise/45 hover:shadow-turquoise/12 focus-within:-translate-y-2 focus-within:border-turquoise/45"
						>
							<div className="relative h-[11.5rem] overflow-hidden bg-white/8 sm:h-48">
								<Image
									src={project.image}
									alt={`${project.title} preview`}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
									className="project-image object-cover transition duration-700 ease-out group-hover:scale-[1.08] group-hover:saturate-125"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-rich-black/72 via-rich-black/12 to-transparent" />
								<div className="absolute right-3 top-3 flex gap-2">
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
													className="inline-flex size-10 items-center justify-center rounded-full border border-white/24 bg-rich-black/72 text-baby-powder shadow-lg shadow-black/24 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-turquoise hover:bg-turquoise hover:text-rich-black focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
												>
													<Icon size={18} aria-hidden="true" />
												</a>
											);
										})
									) : (
										<span className="rounded-full border border-white/18 bg-rich-black/72 px-3 py-2 text-xs font-bold text-baby-powder/78 backdrop-blur">
											Showcase
										</span>
									)}
								</div>
							</div>

							<div className="flex flex-1 flex-col p-5">
								<h3 className="break-words text-[1.45rem] font-extrabold leading-[1.08] text-baby-powder transition duration-300 group-hover:text-turquoise">
									{project.title}
								</h3>
								<p
									className="project-description-clamp mt-3 text-base leading-6 text-baby-powder/80"
									title={project.description}
								>
									{project.description}
								</p>

								{hasLongDescription && (
									<button
										type="button"
										onClick={() => setActiveProject(project)}
										className="mt-3 w-fit text-sm font-extrabold text-orange-peel transition hover:text-turquoise focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-turquoise"
									>
										... Read more
									</button>
								)}

								<div className="mt-auto pt-5">
									<div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full bg-baby-powder px-3 py-1 text-xs font-extrabold text-rich-black shadow-sm shadow-black/18"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</article>
					);
				})}
			</div>

			{activeProject && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-rich-black/82 px-4 py-6 backdrop-blur-md"
					role="dialog"
					aria-modal="true"
					aria-labelledby="project-dialog-title"
					onClick={() => setActiveProject(null)}
				>
					<div
						className="glass-panel max-h-[min(640px,calc(100vh-48px))] w-full max-w-2xl overflow-y-auto p-6"
						onClick={(event) => event.stopPropagation()}
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="text-sm font-bold uppercase text-turquoise">
									Project details
								</p>
								<h3
									id="project-dialog-title"
									className="mt-2 text-3xl font-extrabold leading-tight text-baby-powder"
								>
									{activeProject.title}
								</h3>
							</div>
							<button
								type="button"
								onClick={() => setActiveProject(null)}
								className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/10 text-baby-powder transition hover:border-turquoise hover:text-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
								aria-label="Close project details"
							>
								<X size={18} aria-hidden="true" />
							</button>
						</div>

						<p className="mt-5 text-lg leading-7 text-baby-powder/84">
							{activeProject.description}
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{activeProject.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full bg-baby-powder px-3 py-1 text-xs font-extrabold text-rich-black"
								>
									{tag}
								</span>
							))}
						</div>

						{activeProject.links.length > 0 && (
							<div className="mt-6 flex flex-wrap gap-3">
								{activeProject.links.map((link) => {
									const Icon = icons[link.type] ?? ExternalLink;
									return (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-bold text-baby-powder transition hover:border-turquoise hover:text-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
										>
											<Icon size={16} aria-hidden="true" />
											{link.label}
										</a>
									);
								})}
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
}
