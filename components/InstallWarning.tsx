export default function InstallWarning() {
  return (
    <section id="install" className="relative border-y border-[var(--color-border)] bg-[var(--color-canvas-deep)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-[360px_1fr] md:gap-16 md:px-10 md:py-28">

        {/* Left rail — sticky label */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-warn)]">
            <span className="inline-block h-2 w-2 rotate-45 border border-[var(--color-warn)]" />
            Section 02 · Why the extra step
          </div>
          <h2 className="display text-[32px] md:text-[40px] leading-[1.02] text-[var(--color-ink)]">
            Unsigned
            <br />
            <em className="not-italic text-[var(--color-warn)]">by design.</em>
            <br />
            For now.
          </h2>
          <p className="mt-6 max-w-[36ch] text-[14.5px] leading-[1.6] text-[var(--color-muted)]">
            AgentDesk is indie-built. No Apple Developer certificate yet —
            $99/year, on the roadmap. macOS quarantines the app on first run.
            One terminal command strips the flag. The details below explain why
            that's safe.
          </p>
        </div>

        {/* Right — explainer */}
        <div>
          {/* Why safe */}
          <details className="group rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] open:bg-[var(--color-surface-raised)]" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-ink-dim)] transition-colors hover:text-[var(--color-ink)]">
              <span className="flex items-center gap-3">
                <span className="text-[var(--color-accent)]">?</span>
                Why is this safe?
              </span>
              <span className="text-[var(--color-muted)] transition-transform group-open:rotate-45 text-lg leading-none">
                +
              </span>
            </summary>
            <div className="border-t border-[var(--color-border)] px-5 pb-5 pt-4 text-[14px] leading-[1.65] text-[var(--color-ink-dim)]">
              <p className="mb-3">
                The released <code className="kbd">.dmg</code> is built by a pinned GitHub Actions pipeline — not hand-crafted, not uploaded from a local machine. Every binary is traceable to a git tag in the source tree it was built from. No telemetry phones home from the app. No bundled analytics. No auto-update pinging.
              </p>
              <p className="mb-3">
                The quarantine flag is macOS&rsquo;s <em>&ldquo;this came from the internet&rdquo;</em> marker — not a malware detection. It trips by default on every download, signed or not. <code className="kbd">xattr -rd com.apple.quarantine</code> is a built-in macOS utility (<code className="kbd">man xattr</code>) that deletes one specific extended attribute on the app bundle. It doesn&rsquo;t run any code, change any system setting, or touch anything else on your machine.
              </p>
              <p className="mb-3 text-[var(--color-muted)]">
                Source is private for now — this is an indie project, not an open-source product, and keeping the source closed while we&rsquo;re pre-revenue is a deliberate call. Reach out if you need to audit it for enterprise use.
              </p>
              <p className="text-[var(--color-muted)]">
                Once Apple Dev certs are on the budget the app will be signed and notarized, and this whole section gets deleted.
              </p>
            </div>
          </details>

          {/* TCC side note */}
          <aside className="mt-5 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-warn)]">
              One real limitation
            </div>
            <p className="text-[14px] leading-[1.65] text-[var(--color-ink-dim)]">
              The <strong className="text-[var(--color-ink)]">AI Chat</strong> panel can&apos;t read projects inside{" "}
              <code className="kbd">~/Desktop</code>,{" "}
              <code className="kbd">~/Documents</code>, or{" "}
              <code className="kbd">~/Downloads</code>. macOS TCC blocks
              unsigned apps from those three folders. Move your project anywhere else
              (<code className="kbd">~/code</code>, <code className="kbd">~/projects</code>, etc.) and AI Chat works.
              Everything else — verification, GitHub, Slack alerts, history —
              is HTTP-only and unaffected.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
