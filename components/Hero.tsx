import { getLatestRelease } from "@/lib/github";
import DownloadButton from "./DownloadButton";
import CopyCommand from "./CopyCommand";
import { DEMO_VIDEO_URL } from "@/lib/links";

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  );
}

export default async function Hero() {
  const release = await getLatestRelease();

  return (
    <section className="horizon relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-8 pb-10 md:pt-14 md:pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.25fr_1fr] md:gap-14 md:items-start">
          {/* LEFT — headline / copy / CTAs */}
          <div>
            {/* Subtle eyebrow — TinyFish Accelerator / Verification layer */}
            <div className="rise rise-1 flex items-center justify-center md:justify-start gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[var(--color-muted)]" />
              <span>TinyFish Accelerator</span>
              <span className="text-[var(--color-muted-deep)]">/</span>
              <span>Verification layer</span>
            </div>

            <h1
              className="rise rise-2 display mt-5 text-center md:text-left text-[36px] sm:text-[44px] md:text-[52px] lg:text-[64px] text-[var(--color-ink)]"
              style={{ lineHeight: 0.98 }}
            >
              Agents ship.
              <br />
              <span className="text-[var(--color-accent)] italic font-light [font-feature-settings:'ss01']">
                AgentDesk
              </span>
              <span className="text-[var(--color-ink)]"> verifies.</span>
            </h1>

            <p className="rise rise-3 mx-auto md:mx-0 mt-6 md:mt-7 max-w-[54ch] text-center md:text-left text-[15.5px] leading-[1.55] text-[var(--color-ink-dim)]">
              Every AI coding agent can ship code. None of them verifies it
              works. AgentDesk does. A real browser drives your production URL
              end-to-end after every push, and tells you — in one sentence —
              which commit broke what.
            </p>

            {/* Requirements — macOS version + Claude Code CLI as the hard prereq */}
            <div className="rise rise-3 mt-6 md:mt-7 rounded-[3px] border border-[var(--color-warn)]/40 bg-[color-mix(in_oklab,var(--color-warn)_6%,transparent)] px-4 py-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.12em]">
                <span className="inline-flex items-center gap-1.5 text-[var(--color-warn)]">
                  <span className="inline-block h-1.5 w-1.5 rotate-45 border border-[var(--color-warn)]" />
                  Requires
                </span>
                <span className="text-[var(--color-ink)]">macOS 13+</span>
                <span className="text-[var(--color-muted-deep)]">·</span>
                <span className="text-[var(--color-warn)]">
                  Claude Code CLI
                </span>
              </div>
              <p className="mt-2 text-[12.5px] leading-[1.55] text-[var(--color-ink-dim)]">
                AgentDesk orchestrates Claude Code sessions — without the CLI
                installed, there&rsquo;s nothing to verify.
              </p>
            </div>

            {/* CTAs */}
            <div className="rise rise-4 mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
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
          </div>

          {/* RIGHT — install in three steps, stacked */}
          <aside id="install" className="rise rise-4 md:mt-1">
            <div className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span className="h-px w-6 bg-[var(--color-border-strong)]" />
              Install in three steps
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <InstallCard
                n="01"
                title="Download the .dmg"
                body="Drag AgentDesk.app into /Applications."
              />
              <InstallCard
                n="02"
                title="Strip quarantine once"
                body="Paste in Terminal. One-time command."
                warn="Don't double-click the app before this — macOS will flag it as damaged and refuse to open."
              />
              <CopyCommand command="xattr -rd com.apple.quarantine /Applications/AgentDesk.app" />
              <InstallCard
                n="03"
                title="Open from /Applications"
                body="Launch AgentDesk from Applications. From here on it opens like any other app."
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InstallCard({
  n,
  title,
  body,
  warn,
}: {
  n: string;
  title: string;
  body: string;
  warn?: string;
}) {
  return (
    <div className="rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10.5px] tracking-[0.14em] text-[var(--color-muted-deep)]">
          {n}
        </span>
        <span className="text-[14px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
          {title}
        </span>
      </div>
      <p className="mt-1 text-[12.5px] leading-[1.55] text-[var(--color-ink-dim)]">
        {body}
      </p>
      {warn && (
        <p className="mt-2 flex items-start gap-1.5 text-[11.5px] leading-[1.5] text-[var(--color-warn)]">
          <span className="mt-[4px] inline-block h-1.5 w-1.5 shrink-0 rotate-45 border border-[var(--color-warn)]" />
          <span>{warn}</span>
        </p>
      )}
    </div>
  );
}
