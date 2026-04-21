/* eslint-disable @next/next/no-img-element */
import React from "react";

type Logo = {
  name: string;
  mark: React.ReactNode;
};

/* ---------- Individual logo marks (inline SVG, uniform 28px height) ---------- */

function TinyFishLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 20" className="h-5 w-auto" fill="none" aria-hidden="true">
        <path
          d="M2 10c2.8-4.5 6.5-6.5 11-6.5 3.8 0 7 1.8 9.5 5.5l7-3.5v9L22.5 11c-2.5 3.7-5.7 5.5-9.5 5.5-4.5 0-8.2-2-11-6.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="9.5" r="0.9" fill="currentColor" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.01em]">TinyFish</span>
    </div>
  );
}

function FireworksLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 22 22" className="h-5 w-auto" fill="none" aria-hidden="true">
        <path d="M11 2v5M11 15v5M2 11h5M15 11h5M4.5 4.5l3.5 3.5M14 14l3.5 3.5M17.5 4.5 14 8M8 14l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="11" cy="11" r="1.6" fill="currentColor" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.01em]">
        Fireworks <span className="font-normal text-[var(--color-muted)]">AI</span>
      </span>
    </div>
  );
}

function OpenRouterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 28 20" className="h-5 w-auto" fill="none" aria-hidden="true">
        <circle cx="5" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="23" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="23" cy="15" r="2.4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7.3 9 20.7 5.6M7.3 11l13.4 3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.01em]">
        Open<span className="font-normal">Router</span>
      </span>
    </div>
  );
}

function ComposioLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 22 22" className="h-5 w-auto" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="3" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
        <rect x="3" y="12" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
        <rect x="12" y="12" width="7" height="7" rx="1.2" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.01em]">Composio</span>
    </div>
  );
}

function ClaudeCodeLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 20 20" className="h-5 w-auto" fill="currentColor" aria-hidden="true">
        <path d="M10 1.2 11.7 8.3 18.8 10l-7.1 1.7L10 18.8 8.3 11.7 1.2 10l7.1-1.7L10 1.2Z" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.01em]">
        Claude Code
      </span>
    </div>
  );
}

const LOGOS: Logo[] = [
  { name: "TinyFish", mark: <TinyFishLogo /> },
  { name: "Fireworks AI", mark: <FireworksLogo /> },
  { name: "OpenRouter", mark: <OpenRouterLogo /> },
  { name: "Composio", mark: <ComposioLogo /> },
  { name: "Claude Code", mark: <ClaudeCodeLogo /> },
];

export default function PartnerCarousel() {
  return (
    <section
      aria-labelledby="partners-label"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-canvas-deep)] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-7 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[var(--color-border-strong)]" />
          <span
            id="partners-label"
            className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-muted)]"
          >
            Powered by a best-in-class stack
          </span>
          <span className="h-px w-8 bg-[var(--color-border-strong)]" />
        </div>

        <div className="marquee-viewport">
          <div className="marquee-track text-[var(--color-ink-dim)]">
            <LogoGroup />
            <LogoGroup aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoGroup({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={ariaHidden ?? undefined}>
      {LOGOS.map((logo) => (
        <div
          key={`${ariaHidden ? "dup-" : ""}${logo.name}`}
          className="flex items-center text-[var(--color-ink-dim)] opacity-80"
          title={logo.name}
        >
          {logo.mark}
        </div>
      ))}
    </div>
  );
}
