export default function TinyFishBlock() {
  return (
    <section className="relative border-b border-[var(--color-border)] bg-[var(--color-canvas-deep)] py-28 md:py-36">
      <div className="mx-auto max-w-[1000px] px-6 md:px-10">
        <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          <span className="live-dot" />
          Section 05 · Why TinyFish is core
        </div>

        <p className="display text-[26px] md:text-[40px] leading-[1.2] tracking-[-0.02em] text-[var(--color-ink)] max-w-[32ch]">
          Everything you just saw needs a <em className="not-italic text-[var(--color-accent)] italic font-light">real browser.</em>
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          <div className="text-[15.5px] leading-[1.75] text-[var(--color-ink-dim)] max-w-[58ch]">
            <p className="mb-5">
              <code className="kbd">curl</code> can&apos;t click an OAuth consent screen. Headless Chromium doesn&apos;t know what to do with a Stripe Elements iframe that waits on a postMessage. Unit tests assert
              logic, not the merged-in-production reality of your own JS bundle talking to your own CDN through your own auth provider.
            </p>
            <p className="mb-5">
              <strong className="text-[var(--color-ink)]">TinyFish is a real-browser automation layer.</strong> You give it a URL and a goal in natural language — &ldquo;click the signup button, fill the form with a throwaway email, confirm the dashboard loads&rdquo; — and it navigates with a real Chromium instance that sees cookies, runs your JavaScript, and streams every step back over SSE.
            </p>
            <p>
              Every AgentDesk check — Deploy, OAuth, E2E, Visual, Status — runs through TinyFish. Remove TinyFish and AgentDesk is a dashboard with nothing to show.
            </p>
          </div>

          <aside className="rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 self-start">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              tinyfish / run-sse
            </div>
            <pre className="mt-3 font-mono text-[12px] leading-[1.65] text-[var(--color-ink-dim)] whitespace-pre-wrap">
<span className="text-[var(--color-muted)]">POST</span> <span className="text-[var(--color-accent)]">/v1/automation/run-sse</span>{"\n"}
<span className="text-[var(--color-muted)]">header</span> X-API-Key: ••••{"\n"}
<span className="text-[var(--color-muted)]">body</span> {"{"}{"\n"}
{"  "}<span className="text-[var(--color-accent)]">url</span>: &quot;https://…&quot;,{"\n"}
{"  "}<span className="text-[var(--color-accent)]">goal</span>: &quot;sign up, confirm dashboard loads&quot;{"\n"}
{"}"}{"\n"}{"\n"}
<span className="text-[var(--color-muted)]">→ SSE stream</span>{"\n"}
<span className="text-[var(--color-accent)]">streaming_url</span>{"\n"}
<span className="text-[var(--color-accent)]">step_progress</span> × n{"\n"}
<span className="text-[var(--color-accent)]">COMPLETE</span>
            </pre>
            <div className="mt-4 border-t border-[var(--color-border)] pt-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted-deep)]">
              agent.tinyfish.ai
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
