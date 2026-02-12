const textStyles = [
  { label: "H2", className: "text-h2", sample: "H2 — Main Section Heading" },
  { label: "Body 1", className: "text-body-1", sample: "Body 1 — Primary paragraph style with 140% line height." },
  { label: "Knock Mid", className: "text-knock-mid", sample: "Knock Mid — 20/Auto" },
  { label: "Menu", className: "text-menu", sample: "Menu — Navigation label" },
  { label: "Subheading", className: "text-subheading", sample: "Subheading — Supporting heading text" },
  {
    label: "Description Block",
    className: "text-description-block",
    sample: "Description Block — For highlighted explanatory blocks."
  },
  { label: "Body 2", className: "text-body-2", sample: "Body 2 — Secondary large text style." },
  { label: "H3", className: "text-h3", sample: "H3 — Section subheading" },
  { label: "H2.5", className: "text-h2-5", sample: "H2.5 — Hero heading emphasis" }
];

const TypographyShowcase = () => {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 md:p-10">
      <p className="text-menu uppercase tracking-[0.18em] text-slate-500">Typography preset (Figma)</p>
      <div className="mt-8 space-y-6">
        {textStyles.map((style) => (
          <div className="grid gap-2 border-b border-slate-100 pb-4 md:grid-cols-[180px,1fr]" key={style.label}>
            <span className="text-menu text-slate-400">{style.label}</span>
            <p className={`${style.className} text-slate-900`}>{style.sample}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypographyShowcase;
