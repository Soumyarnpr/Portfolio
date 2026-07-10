export default function SectionHeading({ eyebrow, title, marker = "." }) {
  return (
    <div className="reveal mb-8 md:mb-10">
      <p className="mb-3 text-sm font-bold uppercase text-turquoise">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold text-baby-powder md:text-5xl">
        {title}
        <span className="text-orange-peel">{marker}</span>
      </h2>
      <div className="accent-line mt-5 h-px w-28 origin-left bg-gradient-to-r from-turquoise via-orange-peel to-imperial-red" />
    </div>
  );
}
