import AnalyticsLink from "@/components/analytics/AnalyticsLink";
import CopyEmailButton from "@/components/CopyEmailButton";
import Section from "@/components/Section";
import type { LocalizedProfileContent } from "@/content/profile";

type ContactSectionProps = {
  content: LocalizedProfileContent;
  id?: string;
};

const whatsappHref =
  "https://wa.me/5588992017400?text=Oi%20Ant%C3%B4nio!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20uma%20vaga.";

export default function ContactSection({ content, id = "contact" }: ContactSectionProps) {
  return (
    <Section
      id={id}
      title={content.contactPage.title}
      description={content.contactPage.description}
    >
      <article className="space-y-5 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        <div className="space-y-2">
          <AnalyticsLink
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamar no WhatsApp"
            eventName="contact_link_clicked"
            eventProperties={{ channel: "whatsapp", location: "contact_section" }}
            className="inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-5 py-3.5 text-base font-semibold text-slate-950 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:w-auto"
          >
            Chamar no WhatsApp
          </AnalyticsLink>
          <p className="text-sm text-slate-400">Respondo em até 24h.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <AnalyticsLink
            href={content.profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={content.accessibility.linkedin}
            eventName="social_link_clicked"
            eventProperties={{ location: "contact_section", platform: "linkedin" }}
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.linkedinProfile}
          </AnalyticsLink>
          <AnalyticsLink
            href={content.profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={content.accessibility.github}
            eventName="social_link_clicked"
            eventProperties={{ location: "contact_section", platform: "github" }}
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            {content.actions.githubProfile}
          </AnalyticsLink>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-slate-400 sm:text-sm">{content.profile.email}</p>
          <CopyEmailButton
            email={content.profile.email}
            copyLabel={content.contactPage.copyEmailLabel}
            copiedLabel={content.contactPage.copyEmailSuccess}
          />
        </div>
      </article>
    </Section>
  );
}
