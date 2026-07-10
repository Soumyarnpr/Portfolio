import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 py-8 text-center">
      <p className="text-lg font-bold text-orange-peel">
        Designed & Developed by <span className="text-turquoise">{profile.name}</span>.
      </p>
    </footer>
  );
}
