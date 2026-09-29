import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, title, description, action, children }: SectionProps) {
  return (
    <section id={id} className="space-y-6 scroll-mt-28" aria-labelledby={id ? `${id}-title` : undefined}>
      {title ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id={id ? `${id}-title` : undefined}
              className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
            >
              {title}
            </h2>
            {action}
          </div>
          {description ? (
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
