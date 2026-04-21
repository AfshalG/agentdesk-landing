import Image from "next/image";
import { getLatestRelease } from "@/lib/github";
import { formatDate } from "@/lib/changelog";
import DownloadButton from "./DownloadButton";

export default async function Hero() {
  const release = await getLatestRelease();
  const stamp = release.publishedAt
    ? formatDate(release.publishedAt.slice(0, 10))
    : null;

  return (
    <section className="horizon relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-20">
        <div className="rise rise-1 flex justify-center md:justify-start">
          <span className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-[var(--color-ink-dim)]">
            <span className="live-dot" />
            <span className="text-[var(--color-accent)] uppercase">Phase-2 · TinyFish Accelerator</span>
            <span className="text-[var(--color-muted-deep)]">/</span>
            <span className="uppercase">Verification layer</span>
          </span>
        </div>

        <h1
          className="rise rise-2 display mt-8 text-center md:text-left text-[44px] sm:text-[58px] md:text-[76px] lg:text-[92px] text-[var(--color-ink)]"
          style={{ lineHeight: 0.96 }}
        >
          Agents ship.
          <br />
          <span className="text-[var(--color-accent)] italic font-light [font-feature-settings:'ss01']">
            AgentDesk
          </span>
          <span className="text-[var(--color-ink)]"> verifies.</span>
        </h1>

        <p className="rise rise-3 mx-auto md:mx-0 mt-8 md:mt-10 max-w-[58ch] text-center md:text-left text-[17px] leading-[1.55] text-[var(--color-ink-dim)]">
          Every AI coding agent can ship code. None of them verifies it works.
          AgentDesk does. A real browser drives your production URL end-to-end
          after every push, and tells you — in one sentence — which commit
          broke what.
        </p>

        <div className="rise rise-4 mt-10 flex flex-wrap items-center justify-center md:justify-start gap-5">
          <DownloadButton release={release} size="lg" />
          <a
            href="#walkthrough"
            className="ink-link font-mono text-[13px] tracking-[0.02em] text-[var(--color-ink-dim)]"
          >
            See the full walkthrough →
          </a>
        </div>

        <div className="rise rise-4 mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 font-mono text-[11.5px] tracking-[0.08em] text-[var(--color-muted)]">
          <span className="uppercase">macOS 13+ · Apple Silicon</span>
          <span className="text-[var(--color-muted-deep)]">·</span>
          <span className="uppercase">{release.dmgName.match(/(\d+\.\d+\.\d+)/)?.[0] ?? "2.2.1"}</span>
          {stamp && (
            <>
              <span className="text-[var(--color-muted-deep)]">·</span>
              <span className="uppercase">shipped {stamp}</span>
            </>
          )}
          <span className="text-[var(--color-muted-deep)]">·</span>
          <span className="uppercase">free · unsigned</span>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="rise rise-5 relative mt-16 md:mt-24">
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
