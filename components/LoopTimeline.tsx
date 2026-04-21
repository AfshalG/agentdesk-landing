type Beat = {
  t: string;
  label: string;
  body: string;
  kind: "agent" | "desk" | "browser" | "llm" | "you";
};

const beats: Beat[] = [
  {
    t: "push",
    label: "Agent pushes",
    body: "Claude Code finishes a feature branch. It commits and pushes to origin like any developer would.",
    kind: "agent",
  },
  {
    t: "instant",
    label: "AgentDesk fires",
    body: "The toast lights up. A verification job is queued against the deployed URL the project is mapped to.",
    kind: "desk",
  },
  {
    t: "live",
    label: "TinyFish verifies",
    body: "A real Chromium session navigates the production URL, runs the goal end-to-end, and streams every step into the app. You watch it happen.",
    kind: "browser",
  },
  {
    t: "moments later",
    label: "Fireworks AI diagnoses",
    body: "If it fails, gpt-oss-120b writes the one-sentence cause and maps it to the offending commit SHA.",
    kind: "llm",
  },
  {
    t: "one click",
    label: "You merge via Composio",
    body: "Open the PR in the GitHub tab. Click Merge. AgentDesk watches the required checks go green. Deployment-live toast fires.",
    kind: "you",
  },
];

const kindStyles: Record<Beat["kind"], string> = {
  agent: "text-[#BCDCFF]",
  desk: "text-[var(--color-accent)]",
  browser: "text-[#A0F0D9]",
  llm: "text-[var(--color-warn)]",
  you: "text-[var(--color-ink)]",
};

export default function LoopTimeline() {
  return (
    <section id="loop" className="relative overflow-hidden border-b border-[var(--color-border)]">
      <div className="hud-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 py-28 md:py-40">
        {/* Head */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <span className="live-dot" /> Section 04 · The loop
            </div>
            <h2 className="display text-[40px] md:text-[60px] leading-[1.02] text-[var(--color-ink)] max-w-[18ch]">
              Push to merged.{" "}
              <span className="italic font-light text-[var(--color-accent)]">
                Hands-off.
              </span>
            </h2>
          </div>
          <p className="max-w-[36ch] text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
            One agent push. No manual clicking through the app to see if it
            still works. Five events, a real browser, one sentence of
            diagnosis, one click to ship.
          </p>
        </header>

        {/* Timeline */}
        <ol className="relative mx-auto max-w-[1000px]">
          {/* Vertical spine */}
          <div className="pointer-events-none absolute left-[72px] md:left-[132px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--color-border-strong)] to-transparent" />

          {beats.map((b, i) => (
            <li
              key={b.t}
              className="relative grid grid-cols-[96px_auto_1fr] md:grid-cols-[170px_auto_1fr] items-start gap-6 md:gap-10 py-6"
            >
              {/* Beat label */}
              <div className="font-mono text-[12px] md:text-[15px] leading-[1.25] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {b.t}
              </div>

              {/* Node dot */}
              <div className="relative flex h-full justify-center pt-2 md:pt-3">
                <div className={`relative z-10 h-3 w-3 rotate-45 border-2 ${b.kind === "you" ? "border-[var(--color-accent)] bg-[var(--color-accent)]" : "border-[var(--color-border-strong)] bg-[var(--color-canvas)]"}`} />
              </div>

              {/* Content */}
              <div className="pt-1 pb-2">
                <div className={`flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] ${kindStyles[b.kind]}`}>
                  <span className="h-px w-8 bg-current opacity-60" />
                  beat {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-[20px] md:text-[24px] font-medium tracking-[-0.015em] text-[var(--color-ink)]">
                  {b.label}
                </h3>
                <p className="mt-2 max-w-[60ch] text-[14.5px] leading-[1.65] text-[var(--color-ink-dim)]">
                  {b.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Footer — the one-liner */}
        <div className="mt-20 md:mt-28 text-center">
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-[var(--color-muted-deep)]">
            the loop closes
          </p>
          <p className="mt-5 display text-[28px] md:text-[44px] leading-[1.1] text-[var(--color-ink)]">
            No human ever opened a browser
            <br className="hidden md:block" />
            to find out if production still worked.
          </p>
        </div>
      </div>
    </section>
  );
}
