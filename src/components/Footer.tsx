import type { LocalizedProfileContent } from "@/content/profile";

type FooterProps = {
  content: LocalizedProfileContent;
};

export default function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();

  const rights = content.footer.rights
    .replace("{year}", String(year))
    .replace("{name}", content.profile.name);

  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>{rights}</p>
        <a
          href={`mailto:${content.profile.email}`}
          className="w-fit text-sky-400 transition hover:text-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
        >
          {content.actions.emailMe}
        </a>
      </div>
    </footer>
  );
}
