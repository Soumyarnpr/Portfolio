import { Camera, FileText, GitBranch, Mail, Network } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contactLinks } from "@/data/portfolio";

const iconMap = {
	file: FileText,
	github: GitBranch,
	instagram: Camera,
	linkedin: Network,
	mail: Mail,
};

export default function Contact() {
	return (
		<section id="contact" className="section-shell scroll-mt-28 py-20">
			<SectionHeading eyebrow="Reach out" title="My Contact Details" />

			<div className="grid gap-4 md:grid-cols-2">
				{contactLinks.map((item) => {
					const Icon = iconMap[item.icon] ?? Mail;
					return (
						<a
							key={item.href}
							href={item.href}
							target={
								item.href.startsWith("mailto:") ? undefined : "_blank"
							}
							rel={
								item.href.startsWith("mailto:")
									? undefined
									: "noreferrer"
							}
							download={
								item.download
									? "SOUMYA RANJAN PARIDA RESUME"
									: undefined
							}
							className="glass-panel reveal group flex min-h-28 items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
							style={{ "--contact-color": item.color }}
						>
							<span
								className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/10"
								style={{ color: item.color }}
							>
								<Icon size={26} aria-hidden="true" />
							</span>
							<span className="min-w-0">
								<span className="block text-sm font-bold uppercase text-baby-powder/55">
									{item.label}
								</span>
								<span className="block overflow-hidden text-ellipsis text-xl font-extrabold text-baby-powder group-hover:text-(--contact-color)">
									{item.handle}
								</span>
							</span>
						</a>
					);
				})}
			</div>
		</section>
	);
}
