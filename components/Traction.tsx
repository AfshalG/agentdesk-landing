import { LINKEDIN_POST_URL, TINYFISH_X_URL } from "@/lib/links";

type Stat = { n: string; label: string };

const stats: Stat[] = [
  { n: "13,935", label: "impressions" },
  { n: "5,447", label: "video views" },
  { n: "162", label: "reactions" },
  { n: "27", label: "comments" },
];

export default function Traction() {
  return (
    <section className="relative border-b border-[var(--color-border)] py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">

        <header className="mb-16">
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="live-dot" /> Section 06 · Traction
          </div>
          <h2 className="display max-w-[22ch] text-[40px] md:text-[56px] leading-[1.02] text-[var(--color-ink)]">
            What people who don&apos;t work for us{" "}
            <span className="italic font-light text-[var(--color-accent)]">said about it.</span>
          </h2>
          <p className="mt-6 max-w-[58ch] text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
            No paid distribution. No asks. Every quote below is from a public
            post made by the named person. Screenshots of the originals are
            available on request.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Jason Zhou — large card */}
          <figure className="relative md:col-span-7 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-canvas-deep)] font-mono text-[13px] text-[var(--color-accent)]">
                  JZ
                </div>
                <div>
                  <div className="text-[14px] text-[var(--color-ink)]">Jason Zhou</div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    founder · superdesign · his own post
                  </div>
                </div>
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted-deep)]">
                linkedin
              </div>
            </div>

            <blockquote className="display text-[20px] md:text-[26px] leading-[1.35] tracking-[-0.01em] text-[var(--color-ink)]">
              <span className="text-[var(--color-muted-deep)]">“</span>
              Great to see awesome projects coming out of this.{" "}
              <span className="text-[var(--color-muted)]">My fav ones:</span>{" "}
              AgentDesk by Afshal Gulam gives AI coding agents the ability to
              self-test and verify apps/features they&apos;ve built.{" "}
              <em className="not-italic text-[var(--color-accent)]">
                Vibe code + vibe verify in parallel.
              </em>
              <span className="text-[var(--color-muted-deep)]">”</span>
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <span className="h-px w-10 bg-[var(--color-border-strong)]" />
              angel investor · listed AgentDesk first of three
            </figcaption>
          </figure>

          {/* Stats panel */}
          <figure className="md:col-span-5 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-canvas-deep)] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                LinkedIn · build-in-public post
              </div>
              <p className="mt-4 text-[14px] leading-[1.6] text-[var(--color-ink-dim)]">
                One post. No paid distribution. Organic reach only.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-[var(--color-border)] pt-4">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {s.label}
                  </dt>
                  <dd className="mt-2 display text-[30px] md:text-[40px] leading-none text-[var(--color-ink)] tabular-nums">
                    {s.n}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={LINKEDIN_POST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link mt-8 inline-flex items-center gap-2 self-start font-mono text-[12px] tracking-[0.02em] text-[var(--color-ink-dim)]"
            >
              read the post →
            </a>
          </figure>

          {/* TinyFish quote — preserve "powers users" typo */}
          <figure className="md:col-span-7 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-canvas-deep)] font-mono text-[13px] text-[var(--color-accent)]">
                  TF
                </div>
                <div>
                  <div className="text-[14px] text-[var(--color-ink)]">@Tiny_Fish</div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    quote-tweet · mar 6 2026
                  </div>
                </div>
              </div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted-deep)]">
                x / twitter
              </div>
            </div>

            <blockquote className="text-[18px] md:text-[22px] leading-[1.45] tracking-[-0.005em] text-[var(--color-ink)]">
              <span className="text-[var(--color-muted-deep)]">“</span>
              Look at this 🤩 ai coding agents paired with web agent to verify
              what each of them created 🔥{" "}
              <em className="not-italic text-[var(--color-accent)]">
                all powers users of these agents would love it!
              </em>
              <span className="text-[var(--color-muted-deep)]">”</span>
            </blockquote>

            <figcaption className="mt-6 flex items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <span className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-border-strong)]" />
                tinyfish · official account
              </span>
              <a
                href={TINYFISH_X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-accent)]"
              >
                @Tiny_Fish →
              </a>
            </figcaption>
          </figure>

          {/* Cohort / community strip */}
          <figure className="md:col-span-5 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Voices from the cohort
              </div>
              <ul className="mt-6 flex flex-col gap-5 text-[14.5px] leading-[1.55] text-[var(--color-ink-dim)]">
                <li>
                  <strong className="text-[var(--color-ink)]">Trevor I. Lasn</strong>{" "}
                  <span className="text-[var(--color-muted)]">· CEO 0xinsider</span>
                  <div className="mt-1">
                    &ldquo;Running multiple Claude Code sessions in parallel — the bottleneck is me clicking through to make sure everything works.&rdquo;
                  </div>
                </li>
                <li>
                  <strong className="text-[var(--color-ink)]">Paolo Perrone</strong>{" "}
                  <span className="text-[var(--color-muted)]">· ML engineer</span>
                  <div className="mt-1">
                    &ldquo;Three agents shipping simultaneously. Verification became the human bottleneck. Full circle.&rdquo;
                  </div>
                </li>
                <li>
                  <strong className="text-[var(--color-ink)]">Yangshun Tay</strong>{" "}
                  <span className="text-[var(--color-muted)]">· GreatFrontEnd founder, ex-Meta</span>
                  <div className="mt-1">
                    &ldquo;Very cool! Good stuff and all the best.&rdquo;
                  </div>
                </li>
              </ul>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
