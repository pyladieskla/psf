export default function SectionEyebrow({ children, dark = false }) {
  return (
    <p
      className={`font-display text-sm font-bold uppercase tracking-widest ${
        dark ? "text-brand-amber-light" : "text-brand-amber"
      }`}
    >
      {children}
    </p>
  );
}
