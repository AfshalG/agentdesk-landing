import Image from "next/image";

export default function HeroShowcase() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="relative">
          <CornerTicks />

          <div className="relative rounded-[6px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-1.5 shadow-[0_40px_120px_-30px_rgba(94,234,212,0.15),0_20px_60px_-20px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-3 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a41]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a41]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a41]" />
              </div>
              <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
                AgentDesk.app — 3 sessions live
              </div>
              <div className="flex items-center gap-1.5">
                <span className="live-dot" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  rec
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[3px]">
              <Image
                src="/assets/dashboard.png"
                alt="AgentDesk dashboard: active Claude Code sessions with verification status"
                width={2800}
                height={1800}
                priority
                className="block w-full h-auto"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-canvas)]/40 to-transparent" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted-deep)]">
            <span>dashboard.view</span>
            <span className="flex items-center gap-2">
              <span className="h-px w-12 bg-[var(--color-border)]" />
              <span>native macOS · not a browser extension</span>
              <span className="h-px w-12 bg-[var(--color-border)]" />
            </span>
            <span>2026.04</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerTicks() {
  const tick = "absolute h-3 w-3 border-[var(--color-accent)]/50";
  return (
    <>
      <span className={`${tick} -top-2 -left-2 border-l border-t`} />
      <span className={`${tick} -top-2 -right-2 border-r border-t`} />
      <span className={`${tick} -bottom-2 -left-2 border-l border-b`} />
      <span className={`${tick} -bottom-2 -right-2 border-r border-b`} />
    </>
  );
}
