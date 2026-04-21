import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllReleases, formatDate } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog — AgentDesk",
  description: "Every release of AgentDesk.",
};

export default async function ChangelogPage() {
  const entries = await getAllReleases();

  return (
    <>
      <Nav />
      <main className="relative z-10">
        <section className="mx-auto max-w-[860px] px-6 md:px-10 pt-16 md:pt-24 pb-20">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="live-dot" />
            Changelog
          </div>
          <h1 className="display text-[44px] md:text-[68px] leading-[1.02] text-[var(--color-ink)]">
            Every release.
            <br />
            <span className="italic font-light text-[var(--color-accent)]">
              In order.
            </span>
          </h1>
          <p className="mt-8 max-w-[60ch] text-[15.5px] leading-[1.7] text-[var(--color-muted)]">
            Semantic versioning. Dates reflect when each version was tagged.
            Entries before 2.2.0 are reconstructed from git history.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="ink-link font-mono text-[12px] tracking-[0.02em] text-[var(--color-ink-dim)]"
            >
              ← back to home
            </Link>
          </div>
        </section>

        <div className="mx-auto h-px max-w-[860px] bg-[var(--color-border)]" />

        <section className="mx-auto max-w-[860px] px-6 md:px-10 py-16 md:py-20">
          {entries.map((e) => (
            <article
              key={e.version}
              id={`v${e.version.replace(/\./g, "-")}`}
              className="mb-20 md:mb-28 scroll-mt-24"
            >
              <header className="mb-8 flex items-baseline justify-between border-b border-[var(--color-border)] pb-5">
                <h2 className="display text-[36px] md:text-[52px] leading-none text-[var(--color-ink)] tabular-nums">
                  v{e.version}
                </h2>
                <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {formatDate(e.date)}
                </span>
              </header>
              <div
                className="prose-cl"
                dangerouslySetInnerHTML={{ __html: e.bodyHtml }}
              />
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
