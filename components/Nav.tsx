import Link from "next/link";
import { GITHUB_URL, getStarCount } from "@/lib/github";
import { getCurrentVersion } from "@/lib/changelog";

function AgentDeskMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5 3.5 5.4v6.1c0 5.2 3.6 8.9 8.5 10 4.9-1.1 8.5-4.8 8.5-10V5.4L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="m8.2 12 2.8 2.8 5-5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z" />
    </svg>
  );
}

export default async function Nav() {
  const [version, stars] = await Promise.all([getCurrentVersion(), getStarCount()]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-canvas)_82%,transparent)] backdrop-blur-md supports-[not(backdrop-filter:blur(4px))]:bg-[var(--color-canvas)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4 md:px-10 md:py-5">
        <div className="flex items-center gap-3 justify-self-start">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="AgentDesk home">
            <AgentDeskMark className="h-6 w-6 text-[var(--color-accent)] transition-transform duration-300 group-hover:rotate-[-4deg]" />
            <span className="text-[15px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
              AgentDesk
            </span>
          </Link>
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-[2px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 font-mono text-[10.5px] leading-none tracking-[0.12em] text-[var(--color-muted)]">
            <span className="live-dot" />v{version}
          </span>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8 font-mono text-[12.5px] tracking-[0.02em] text-[var(--color-ink-dim)] justify-self-center">
          <a href="#walkthrough" className="hover:text-[var(--color-accent)] transition-colors">
            Walkthrough
          </a>
          <a href="#install" className="hover:text-[var(--color-accent)] transition-colors">
            Install
          </a>
          <a href="#loop" className="hover:text-[var(--color-accent)] transition-colors">
            The&nbsp;Loop
          </a>
          <Link
            href="/changelog"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Changelog
          </Link>
        </nav>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 justify-self-end rounded-[2px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 font-mono text-[12px] text-[var(--color-ink-dim)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-ink)]"
          aria-label="Star AgentDesk on GitHub"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">star</span>
          {typeof stars === "number" && (
            <span className="rounded-[2px] bg-[var(--color-canvas-deep)] px-1.5 py-0.5 tabular-nums text-[var(--color-ink)]">
              {stars.toLocaleString()}
            </span>
          )}
        </a>
      </div>
    </header>
  );
}
