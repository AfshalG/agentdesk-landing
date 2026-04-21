import CopyCommand from "./CopyCommand";

export default function InstallWarning() {
  return (
    <section id="install" className="relative border-y border-[var(--color-border)] bg-[var(--color-canvas-deep)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[360px_1fr] md:gap-16 md:px-10 md:py-32">

        {/* Left rail — sticky label */}
        <div className="md:sticky md:top-24 md:self-start">
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-warn)]">
            <span className="inline-block h-2 w-2 rotate-45 border border-[var(--color-warn)]" />
            Section 02 · Install
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
            $99/year, on the roadmap. macOS will quarantine the app on first
            run. One terminal command strips the flag.
          </p>
        </div>

        {/* Right — steps */}
        <div>
          <ol className="relative flex flex-col gap-10">
            <Step n="01" title="Download the .dmg.">
              <p>
                Double-click to mount it. Drag <code className="kbd">AgentDesk.app</code> into your <code className="kbd">/Applications</code> folder.
              </p>
            </Step>

            <Step n="02" title="Strip the quarantine flag.">
              <p className="mb-4">
                Open Terminal. Paste the command below. Press Enter. You only
                do this once.
              </p>
              <CopyCommand command="xattr -rd com.apple.quarantine /Applications/AgentDesk.app" />
            </Step>

            <Step n="03" title="Launch. That's it.">
              <p>
                Double-click <code className="kbd">AgentDesk</code> in
                Applications. From here on it opens like any other app.
              </p>
            </Step>
          </ol>

          {/* Why safe */}
          <details className="group mt-10 rounded-[3px] border border-[var(--color-border)] bg-[var(--color-surface)] open:bg-[var(--color-surface-raised)]">
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

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-5 md:gap-7">
      <div className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-muted-deep)] pt-1">
        {n}
      </div>
      <div>
        <h3 className="text-[18px] font-medium leading-[1.25] text-[var(--color-ink)] tracking-[-0.01em]">
          {title}
        </h3>
        <div className="mt-3 max-w-[54ch] text-[14.5px] leading-[1.65] text-[var(--color-ink-dim)]">
          {children}
        </div>
      </div>
    </li>
  );
}
