import { getLatestRelease } from "@/lib/github";
import DownloadButton from "./DownloadButton";

export default async function FinalCta() {
  const release = await getLatestRelease();
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-canvas-deep)] py-32 md:py-44">
      <div className="hud-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[900px] px-6 md:px-10 text-center">
        <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          <span className="live-dot" /> Ready · 28 MB · macOS 13+
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
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <DownloadButton release={release} size="lg" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            v{release.version} · aarch64-apple-darwin
          </span>
        </div>
      </div>
    </section>
  );
}
