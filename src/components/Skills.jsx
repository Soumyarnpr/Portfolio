import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
	return (
		<section id="skills" className="section-shell scroll-mt-28 py-20">
			<SectionHeading
				eyebrow="Capability map"
				title="What I Know"
				marker="?"
			/>

			<div className="grid gap-5 md:grid-cols-2">
				{skillGroups.map((group, groupIndex) => (
					<article key={group.title} className="glass-panel reveal p-6">
						<div className="mb-6 flex items-center gap-3">
							<span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-lg font-extrabold text-orange-peel">
								{groupIndex + 1}
							</span>
							<h3 className="text-xl font-extrabold text-baby-powder">
								{group.title}
							</h3>
						</div>
						<div className="flex flex-wrap gap-3">
							{group.skills.map((skill, index) => (
								<span
									key={skill}
									className={`rounded-md border px-4 py-2 text-base font-bold text-baby-powder shadow-lg shadow-black/10 ${
										index % 4 === 0
											? "border-imperial-red bg-imperial-red/10"
											: index % 4 === 1
												? "border-orange-peel bg-orange-peel/10"
												: index % 4 === 2
													? "border-turquoise bg-turquoise/10"
													: "border-baby-powder/55 bg-white/8"
									}`}
								>
									{skill}
								</span>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
