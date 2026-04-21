"use client";

import { useState } from "react";

function CopyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 15V5.5A1.5 1.5 0 0 1 5.5 4H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m5 12 5 5 9-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Props = {
  command: string;
  label?: string;
};

export default function CopyCommand({ command, label = "$" }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — fail silently */
    }
  }

  return (
    <div className="group relative">
      <div className="flex items-start gap-3 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-canvas-deep)] px-4 py-3.5 pr-24 font-mono text-[13px] leading-[1.6] text-[var(--color-ink)]">
        <span className="shrink-0 text-[var(--color-accent)] select-none pt-[1px]">{label}</span>
        <code className="break-words [word-break:break-word]">{command}</code>
      </div>
      <button
        onClick={onCopy}
        className="absolute top-2 right-2 flex items-center gap-1.5 rounded-[2px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
        aria-label={copied ? "Copied" : "Copy command"}
      >
        {copied ? (
          <>
            <CheckIcon className="h-3 w-3 text-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)]">copied</span>
          </>
        ) : (
          <>
            <CopyIcon className="h-3 w-3" />
            <span>copy</span>
          </>
        )}
      </button>
    </div>
  );
}
