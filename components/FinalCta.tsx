import { getLatestRelease } from "@/lib/github";
import DownloadButton from "./DownloadButton";
import { DEMO_VIDEO_URL } from "@/lib/links";

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  );
}

export default async function FinalCta() {
  const release = await getLatestRelease();
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-canvas-deep)] py-32 md:py-44">
      <div className="hud-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[900px] px-6 md:px-10 text-center">
        <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          <span className="live-dot" /> Ready · macOS 13+ · Apple Silicon
        </div>
        <h2 className="display text-[40px] md:text-[72px] leading-[0.98] text-[var(--color-ink)]">
          Every agent ships.
          <br />
          <span className="italic font-light text-[var(--color-accent)]">
            None of them verifies.
          </span>
          <br />
          You deserve both.
        </h2>
        <p className="mx-auto mt-8 max-w-[52ch] text-[15.5px] leading-[1.65] text-[var(--color-ink-dim)]">
          Free to download. No signup. No email. No telemetry. If it works for
          you, tell a friend.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <DownloadButton release={release} size="lg" />
          {DEMO_VIDEO_URL && (
            <a
              href={DEMO_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !py-4 !px-6 !text-[14px]"
              aria-label="Watch the 5-minute walkthrough video"
            >
              <PlayIcon className="h-3.5 w-3.5" />
              <span>Watch 5-min walkthrough</span>
            </a>
          )}
        </div>
        <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
          v{release.version} · aarch64-apple-darwin
        </div>
      </div>
    </section>
  );
}
