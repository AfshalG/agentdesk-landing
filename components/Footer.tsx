import Link from "next/link";
import { GITHUB_URL } from "@/lib/github";
import { LINKEDIN_URL } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] bg-[var(--color-canvas)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 md:px-10 py-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-[var(--color-accent)]"
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
            <span className="text-[14px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
              AgentDesk
            </span>
          </div>
          <p className="mt-4 max-w-[42ch] text-[13.5px] leading-[1.65] text-[var(--color-muted)]">
            The verification layer for AI coding agents. Native macOS. Built
            indie in Phase-2 of the TinyFish Accelerator.
          </p>
          <p className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-muted-deep)]">
            © 2026 · Built by Afshal Gulam
          </p>
        </div>

        <nav className="flex flex-col gap-3 font-mono text-[12px] tracking-[0.02em]">
          <div className="label mb-1">Product</div>
          <a href="#walkthrough" className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]">
            Walkthrough
          </a>
          <a href="#install" className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]">
            Install
          </a>
          <a href="#loop" className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]">
            The Loop
          </a>
          <Link href="/changelog" className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]">
            Changelog
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 font-mono text-[12px] tracking-[0.02em]">
          <div className="label mb-1">Source</div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
          <Link
            href="/changelog"
            className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]"
          >
            Release notes
          </Link>
        </nav>

        <nav className="flex flex-col gap-3 font-mono text-[12px] tracking-[0.02em]">
          <div className="label mb-1">Maker</div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Tiny_Fish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-ink-dim)] hover:text-[var(--color-accent)]"
          >
            TinyFish
          </a>
        </nav>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 md:px-10 py-6 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-muted-deep)]">
            agentdesk · v2.2.1 · aarch64-apple-darwin
          </div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-muted-deep)]">
            indie · unsigned · no telemetry
          </div>
        </div>
      </div>
    </footer>
  );
}
