import Image from "next/image";

export default function FirstRun() {
  return (
    <section
      id="setup"
      className="relative border-b border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <header className="mb-14 md:mb-20 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <span className="live-dot" /> Section 03 · First run
            </div>
            <h2 className="display max-w-[22ch] text-[40px] md:text-[56px] leading-[1.02] text-[var(--color-ink)]">
              Configure once.{" "}
              <span className="italic font-light text-[var(--color-accent)]">
                Never again.
              </span>
            </h2>
          </div>
          <p className="max-w-[36ch] text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
            Shared API keys are pre-wired so the app works on first launch. You
            just point each session card at its live URL and its repo.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <SetupPanel
            tag="API keys · optional"
            tagTone="muted"
            title="Shared keys, ready to go."
            image={{
              src: "/assets/setup-settings.png",
              alt: "AgentDesk Settings modal showing TinyFish, Fireworks AI, OpenRouter key fields and the Composio GitHub + Slack integration row",
              aspect: "aspect-[1400/1500]",
            }}
            body={
              <>
                <p>
                  Shared <strong className="text-[var(--color-ink)]">TinyFish</strong>,{" "}
                  <strong className="text-[var(--color-ink)]">Fireworks AI</strong>, and{" "}
                  <strong className="text-[var(--color-ink)]">OpenRouter</strong>{" "}
                  keys are wired on install — AgentDesk works out of the box.
                  Paste your own in Settings only if you want isolation from
                  the shared quotas.
                </p>
                <p className="mt-3">
                  Connect <strong className="text-[var(--color-ink)]">GitHub</strong>{" "}
                  in the same panel to unlock the PR flow —{" "}
                  <strong className="text-[var(--color-ink)]">Slack</strong>{" "}
                  is optional, only if you want verification-failure alerts in
                  a channel.
                </p>
              </>
            }
          />

          <SetupPanel
            tag="Per project · required"
            tagTone="warn"
            title="One card. Three fields. Ship."
            image={{
              src: "/assets/setup-project.png",
              alt: "AgentDesk Project configuration modal for the devauth project showing APP URL, GITHUB REPO, and OAUTH TEST URL fields",
              aspect: "aspect-[1400/1000]",
            }}
            body={
              <>
                <p>
                  Every session card wires to one live URL, one GitHub repo,
                  and — if you want OAuth verification — one OAuth test URL.
                  One click per project, saved forever.
                </p>
                <p className="mt-3">
                  E2E scenarios, content regex, status-URL probing, and Slack
                  alerts each live in their own tab on the same modal. Empty
                  tabs mean no checks of that type — AgentDesk only runs what
                  you configure.
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

type Image = { src: string; alt: string; aspect: string };

function SetupPanel({
  tag,
  tagTone,
  title,
  image,
  body,
}: {
  tag: string;
  tagTone: "muted" | "warn";
  title: string;
  image: Image;
  body: React.ReactNode;
}) {
  const tagColor =
    tagTone === "warn"
      ? "text-[var(--color-warn)] border-[var(--color-warn)]/60"
      : "text-[var(--color-muted)] border-[var(--color-border-strong)]";

  return (
    <article className="flex flex-col gap-6 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-[2px] border px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] ${tagColor}`}
        >
          <span
            className={`inline-block h-1.5 w-1.5 rotate-45 border ${
              tagTone === "warn"
                ? "border-[var(--color-warn)]"
                : "border-[var(--color-muted)]"
            }`}
          />
          {tag}
        </span>
      </div>

      <h3 className="display text-[26px] md:text-[32px] leading-[1.08] tracking-[-0.02em] text-[var(--color-ink)]">
        {title}
      </h3>

      <figure className="relative">
        <div className={`relative ${image.aspect} overflow-hidden rounded-[4px] border border-[var(--color-border-strong)] bg-[var(--color-canvas-deep)]`}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </div>
      </figure>

      <div className="text-[14.5px] leading-[1.7] text-[var(--color-ink-dim)]">
        {body}
      </div>
    </article>
  );
}
