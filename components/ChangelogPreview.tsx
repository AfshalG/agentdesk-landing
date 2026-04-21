import Link from "next/link";
import { getTopReleases, formatDate } from "@/lib/changelog";

export default async function ChangelogPreview() {
  const entries = await getTopReleases(2);

  return (
    <section className="relative border-b border-[var(--color-border)] py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <header className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <span className="live-dot" /> Section 07 · Releases
            </div>
            <h2 className="display text-[40px] md:text-[56px] leading-[1.02] text-[var(--color-ink)]">
              Shipping weekly.
            </h2>
          </div>
          <Link
            href="/changelog"
            className="ink-link font-mono text-[12px] tracking-[0.02em] text-[var(--color-ink-dim)]"
          >
            Full changelog →
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {entries.map((e) => (
            <article
              key={e.version}
              className="group relative flex h-full flex-col rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 transition-colors hover:border-[var(--color-border-strong)]"
            >
              <div className="flex items-baseline justify-between">
                <div className="display text-[42px] md:text-[52px] leading-none text-[var(--color-ink)] tabular-nums tracking-[-0.02em]">
                  v{e.version}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {formatDate(e.date)}
                </div>
              </div>

              <div
                className="prose-cl mt-8 max-w-none text-[14px]"
                dangerouslySetInnerHTML={{ __html: truncate(e.bodyHtml, 600) }}
              />

              <Link
                href={`/changelog#v${e.version.replace(/\./g, "-")}`}
                className="mt-8 self-start font-mono text-[12px] tracking-[0.02em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                read the full notes →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function truncate(html: string, maxChars: number): string {
  if (html.length <= maxChars) return html;
  const slice = html.slice(0, maxChars);
  const lastClose = slice.lastIndexOf("</");
  const lastEnd = slice.indexOf(">", lastClose) + 1;
  if (lastEnd > 0) {
    return slice.slice(0, lastEnd) + " …";
  }
  return slice + " …";
}
