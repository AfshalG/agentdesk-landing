type Tier = {
  id: string;
  name: string;
  price: string;
  cadence?: string;
  tagline: string;
  features: string[];
  recommended?: boolean;
};

const tiers: Tier[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    cadence: "bring your own keys",
    tagline:
      "Paste your TinyFish, Fireworks AI, and OpenRouter keys in Settings. Unlimited checks at your own cost.",
    features: [
      "Unlimited verification runs",
      "All check types — deploy, OAuth, E2E, visual, status",
      "Full GitHub + Slack integrations",
      "Local history, diagnosis, Suggest Fix",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    cadence: "per user / month",
    tagline:
      "Our pooled API keys. No key management. Fixed monthly check quota, zero per-run cost anxiety.",
    features: [
      "Shared pooled TinyFish + Fireworks AI quotas",
      "No key management, no provider signups",
      "Every Free-tier feature included",
      "Priority support via email",
    ],
    recommended: true,
  },
  {
    id: "team",
    name: "Team",
    price: "$39",
    cadence: "per seat / month",
    tagline:
      "Multi-user projects. Shared Slack alerts. Higher quotas. For 2–20-dev shops running AI agents in parallel.",
    features: [
      "Everything in Pro",
      "Multi-user project access",
      "Shared Slack alert routing",
      "Higher verification quota per seat",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$149 – $199",
    cadence: "per seat / month",
    tagline:
      "For orgs whose legal and IT teams need SSO, audit logs, and an SLA before anything can ship.",
    features: [
      "Single sign-on (Okta, Google Workspace)",
      "Admin roles, audit logs",
      "Enterprise SLA",
      "Dedicated onboarding + Slack channel",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-b border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <header className="mb-10 md:mb-14 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <span className="live-dot" /> Section 07 · Pricing
            </div>
            <h2 className="display max-w-[22ch] text-[40px] md:text-[56px] leading-[1.02] text-[var(--color-ink)]">
              Free{" "}
              <span className="italic font-light text-[var(--color-accent)]">
                while we&rsquo;re pre-pricing.
              </span>
            </h2>
          </div>
          <p className="max-w-[36ch] text-[14.5px] leading-[1.65] text-[var(--color-muted)]">
            Shared keys cover everyone today. Below is the ladder we&rsquo;re
            building toward — live once paid tiers turn on.
          </p>
        </header>

        <div className="mb-10 rounded-[3px] border border-[var(--color-accent)]/40 bg-[color-mix(in_oklab,var(--color-accent)_6%,transparent)] px-5 py-4">
          <p className="flex items-start gap-3 text-[13.5px] leading-[1.65] text-[var(--color-ink)]">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 shrink-0 rotate-45 border border-[var(--color-accent)] bg-[var(--color-accent)]" />
            <span>
              <strong>Today every tier is free.</strong>{" "}
              <span className="text-[var(--color-ink-dim)]">
                You run on our pooled TinyFish / Fireworks AI / Composio keys
                at our cost while we figure the mix out. No credit card, no
                sign-up — you just install and use it.
              </span>
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const accentRing = tier.recommended
    ? "border-[var(--color-accent)]/60 ring-1 ring-[var(--color-accent)]/30 shadow-[0_20px_60px_-20px_rgba(94,234,212,0.18)]"
    : "border-[var(--color-border)]";

  return (
    <article
      className={`relative flex flex-col gap-5 rounded-[4px] border bg-[var(--color-surface)] p-6 md:p-7 ${accentRing}`}
    >
      {tier.recommended && (
        <span className="absolute -top-2.5 left-5 inline-flex items-center gap-1.5 rounded-[2px] border border-[var(--color-accent)]/60 bg-[var(--color-canvas)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          <span className="inline-block h-1 w-1 rotate-45 border border-[var(--color-accent)] bg-[var(--color-accent)]" />
          recommended
        </span>
      )}

      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {tier.name}
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="display text-[36px] md:text-[40px] leading-none text-[var(--color-ink)] tabular-nums tracking-[-0.02em]">
            {tier.price}
          </span>
          {tier.cadence && (
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
              {tier.cadence}
            </span>
          )}
        </div>
      </div>

      <p className="text-[13.5px] leading-[1.6] text-[var(--color-ink-dim)]">
        {tier.tagline}
      </p>

      <ul className="mt-1 flex flex-col gap-2">
        {tier.features.map((f, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-[var(--color-ink-dim)]"
          >
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rotate-45 border border-[var(--color-accent)]/70" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
