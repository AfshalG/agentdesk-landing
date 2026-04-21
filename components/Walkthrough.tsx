import Image from "next/image";

type Step = {
  n: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: { src: string; alt: string; frame?: "dashboard" | "window" | "chat" };
  accentPanel?: React.ReactNode;
};

const steps: Step[] = [
  {
    n: "01",
    eyebrow: "sessions · detected",
    title: "Claude Code runs. AgentDesk watches.",
    body:
      "Scans ~/.claude/projects every few seconds. Each session card carries the project name, branch, last commit, deploy URL, and a live pulse when the agent is still working.",
    bullets: [
      "Hook receiver on localhost:9876 fires on SessionStart / Stop",
      "Groups sessions by real cwd — cd into another project mid-session and it lands on the right card",
      "Idle sessions tuck into a Past Sessions folder so the dashboard stays focused on what's running",
    ],
    image: {
      src: "/assets/dashboard.png",
      alt: "Dashboard with three active Claude Code sessions and verification status dots",
      frame: "dashboard",
    },
  },
  {
    n: "02",
    eyebrow: "push · detected",
    title: "Agent pushes. A toast fires.",
    body:
      "The moment a git push lands on a branch tracked by AgentDesk, a verification job is queued. Claude Code&apos;s Stop hook fires when the agent finishes a turn — AgentDesk reads the session transcript, spots the push command, and kicks off the checks. No polling, no manual trigger.",
    bullets: [
      "Pre-flight push check catches branches never sent to origin",
      "One toast per push — deduplicated across every session card",
      "Native macOS notification when the dashboard isn&apos;t focused",
    ],
    image: {
      src: "/assets/agent-push.png",
      alt: "Claude Code session with a verification toast firing after a push",
      frame: "window",
    },
  },
  {
    n: "03",
    eyebrow: "browser · live",
    title: "TinyFish drives your URL.",
    body:
      "TinyFish navigates the actual production site over SSE. You watch the page render in a live iframe inside AgentDesk while structured JSON streams in alongside — which selectors fired, which buttons clicked, what each network response was.",
    bullets: [
      "Deploy / OAuth / E2E / Visual / Status — five check modes",
      "Goals in natural language. No Playwright boilerplate.",
      "Live streaming_url iframe = you see exactly what the bot sees",
    ],
    accentPanel: <BrowserReel />,
  },
  {
    n: "04",
    eyebrow: "failure · explained",
    title: "Fireworks AI writes the one-sentence why.",
    body:
      "When a check fails, Fireworks AI&rsquo;s gpt-oss-120b diagnoses it in about 1.4 seconds and correlates it to the commit that caused the break. Click &ldquo;Suggest Fix&rdquo; and Kimi K2.5 does few-shot RAG over past failures on this project and drafts the patch.",
    bullets: [
      "Diagnosis decoupled from the result emit — never blocks the toast",
      "OpenRouter cascade auto-fallbacks when Fireworks AI is rate-limited",
      "In-app AI Chat picks up the same context and keeps investigating",
    ],
    image: {
      src: "/assets/chat-diagnosis.png",
      alt: "AI Chat panel with Fireworks diagnosis of a failing OAuth redirect",
      frame: "chat",
    },
  },
  {
    n: "05",
    eyebrow: "pr · shipped",
    title: "Composio creates, polishes, merges. One tab.",
    body:
      "GitHub lives in a dedicated tab, wired through Composio. Click Create PR and an editable draft opens with an AI-polished title and body written from your actual commit log. Click Merge PR and the squash commit is already staged — green-check watch runs live.",
    bullets: [
      "Fork-aware. Works on forks you don&apos;t own.",
      "Post the diagnosis straight to the failing PR as a comment",
      "Deployment-live toast fires the moment required checks turn green",
    ],
    image: {
      src: "/assets/github-tab.png",
      alt: "GitHub tab listing open PRs across projects with inline Create PR and Merge PR buttons",
      frame: "window",
    },
  },
  {
    n: "06",
    eyebrow: "history · searchable",
    title: "Every run remembered.",
    body:
      "Every verification run — checks, duration, commit SHA, diagnosis, Suggest Fix output — persists locally. Filter by project, date range, or failure class. Export as JSON. Re-run any check straight from the row.",
    bullets: [
      "Plain JSON on disk at ~/.config/agentdesk — zero cloud dependency",
      "Diagnosis + Suggest Fix saved alongside each run",
      "Powers the few-shot RAG that makes Kimi&apos;s fixes better over time",
    ],
    image: {
      src: "/assets/history-overview.png",
      alt: "Verification history with filter, date-range, and per-run diagnosis",
      frame: "window",
    },
  },
];

export default function Walkthrough() {
  return (
    <section
      id="walkthrough"
      className="relative border-b border-[var(--color-border)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section head */}
        <header className="mb-20 md:mb-28 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <span className="live-dot" /> Section 03 · Walkthrough
            </div>
            <h2 className="display max-w-[20ch] text-[40px] md:text-[60px] leading-[1.02] text-[var(--color-ink)]">
              How a push becomes a{" "}
              <span className="italic font-light text-[var(--color-accent)]">verified merge.</span>
            </h2>
          </div>
          <p className="max-w-[36ch] text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
            Six steps, end to end, lifted from the app as it runs today.
            No reconstruction, no marketing mock-ups — these are the screens you
            land on five minutes after install.
          </p>
        </header>

        {/* Steps */}
        <ol className="flex flex-col gap-32 md:gap-44">
          {steps.map((s, i) => (
            <StepRow key={s.n} step={s} reversed={i % 2 === 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepRow({ step, reversed }: { step: Step; reversed: boolean }) {
  return (
    <li className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
      {/* Text */}
      <div className={reversed ? "md:order-2" : ""}>
        <div className="flex items-baseline gap-4">
          <div className="font-mono text-[13px] tracking-[0.12em] text-[var(--color-muted-deep)]">
            STEP
          </div>
          <div className="display text-[64px] md:text-[84px] leading-none text-[var(--color-ink-dim)] tabular-nums">
            {step.n}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          <span className="h-px w-6 bg-[var(--color-accent)]/60" />
          {step.eyebrow}
        </div>

        <h3 className="display mt-5 text-[28px] md:text-[36px] leading-[1.12] text-[var(--color-ink)] tracking-[-0.02em]">
          {step.title}
        </h3>

        <p
          className="mt-5 max-w-[48ch] text-[15.5px] leading-[1.7] text-[var(--color-ink-dim)]"
          dangerouslySetInnerHTML={{ __html: step.body }}
        />

        {step.bullets && (
          <ul className="mt-6 flex flex-col gap-2.5">
            {step.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[14px] leading-[1.55] text-[var(--color-ink-dim)]"
              >
                <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rotate-45 border border-[var(--color-accent)]/80" />
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Visual */}
      <div className={reversed ? "md:order-1" : ""}>
        {step.image ? (
          <ScreenshotFrame
            src={step.image.src}
            alt={step.image.alt}
            frame={step.image.frame ?? "window"}
            step={step.n}
          />
        ) : step.accentPanel ? (
          step.accentPanel
        ) : null}
      </div>
    </li>
  );
}

function ScreenshotFrame({
  src,
  alt,
  frame,
  step,
}: {
  src: string;
  alt: string;
  frame: "dashboard" | "window" | "chat";
  step: string;
}) {
  const titleText = {
    dashboard: "dashboard.view",
    window: "viewport.live",
    chat: "chat.session",
  }[frame];

  return (
    <figure className="relative">
      {/* Corner step tick */}
      <div className="absolute -top-3 -left-3 z-10 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-accent)] bg-[var(--color-canvas)] px-2 py-1 border border-[var(--color-border-strong)] rounded-[2px]">
        {step}
      </div>

      <div className="relative rounded-[5px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-1 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(94,234,212,0.04)]">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#3a3a41]" />
            <span className="h-2 w-2 rounded-full bg-[#3a3a41]" />
            <span className="h-2 w-2 rounded-full bg-[#3a3a41]" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {titleText}
          </div>
          <div className="h-2 w-2" />
        </div>

        <div className="overflow-hidden rounded-[3px]">
          <Image
            src={src}
            alt={alt}
            width={2800}
            height={1800}
            className="block w-full h-auto"
          />
        </div>
      </div>
    </figure>
  );
}

/**
 * A stylized "browser reel" panel — no screenshot. Used for step 03 which is
 * about the live streaming iframe; showing a static screenshot of a browser
 * inside a browser is visually confusing, so we render a synthetic HUD.
 */
function BrowserReel() {
  return (
    <div className="relative">
      <div className="absolute -top-3 -left-3 z-10 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-accent)] bg-[var(--color-canvas)] px-2 py-1 border border-[var(--color-border-strong)] rounded-[2px]">
        03
      </div>

      <div className="relative overflow-hidden rounded-[5px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-1 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
        {/* URL bar */}
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#3a3a41]" />
            <span className="h-2 w-2 rounded-full bg-[#3a3a41]" />
            <span className="h-2 w-2 rounded-full bg-[#3a3a41]" />
          </div>
          <div className="ml-2 flex-1 rounded-[2px] bg-[var(--color-canvas-deep)] border border-[var(--color-border)] px-3 py-1 font-mono text-[11px] text-[var(--color-ink-dim)]">
            <span className="text-[var(--color-accent)]">https://</span>parksmart-lime.vercel.app<span className="text-[var(--color-muted-deep)]">/checkout</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-accent)] flex items-center gap-1.5">
            <span className="live-dot" /> live
          </span>
        </div>

        {/* Viewport */}
        <div className="relative aspect-[5/3] overflow-hidden rounded-[3px] bg-[var(--color-canvas-deep)]">
          <div className="hud-grid absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <span>tinyfish · run-sse</span>
              <span className="text-[var(--color-accent)]">step 4 / 7</span>
            </div>

            <div className="flex flex-col gap-3 font-mono text-[12px]">
              <div className="flex items-center gap-3 text-[var(--color-ink-dim)]">
                <span className="text-[var(--color-accent)]">✓</span>
                <span>click button[data-test=&ldquo;signup-start&rdquo;]</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-ink-dim)]">
                <span className="text-[var(--color-accent)]">✓</span>
                <span>fill input[name=&ldquo;email&rdquo;] afshal@agentdesk.dev</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-ink-dim)]">
                <span className="text-[var(--color-accent)]">✓</span>
                <span>submit form#onboarding</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-ink)]">
                <span className="text-[var(--color-accent)] animate-pulse">…</span>
                <span>await confirmation &ldquo;thanks! check your email&rdquo;</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 font-mono text-[10px] uppercase tracking-[0.14em]">
              <Badge label="nav" />
              <Badge label="click" />
              <Badge label="fill" />
              <Badge label="assert" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted-deep)]">
        real chromium · not headless · not a screenshot
      </div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="rounded-[2px] border border-[var(--color-border)] bg-[var(--color-canvas)] px-2 py-1 text-center text-[var(--color-muted)]">
      {label}
    </div>
  );
}
