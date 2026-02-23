import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="space-y-6 scroll-mt-28" aria-labelledby={id ? `${id}-title` : undefined}>
      {title ? (
        <div className="space-y-2">
          <h2
            id={id ? `${id}-title` : undefined}
            className="text-2xl font-semibold tracking-tight text-white"
          >
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
