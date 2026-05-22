"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
};

export default function ProjectGallery({ items }: ProjectGalleryProps) {
  const [activeItem, setActiveItem] = useState<ProjectGalleryItem | null>(null);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <figure
            key={`${item.src}-${item.alt}`}
            className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40"
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative block aspect-[16/9] w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              aria-label={item.caption ? `${item.alt}. ${item.caption}` : item.alt}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
              />
            </button>
            {item.caption ? (
              <figcaption className="border-t border-slate-800 px-3 py-2 text-xs text-slate-400">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/90 px-4 py-6 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-950"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
              <p className="truncate pr-4 text-sm font-medium text-slate-200">{activeItem.alt}</p>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-700 text-sm font-semibold text-slate-100 transition hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                aria-label="Fechar imagem expandida"
              >
                X
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-slate-950">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="100vw"
                className="object-contain object-top"
              />
            </div>
            {activeItem.caption ? (
              <p className="border-t border-slate-800 px-3 py-2 text-xs text-slate-400">
                {activeItem.caption}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
