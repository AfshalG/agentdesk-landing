# Changelog

All notable changes to AgentDesk. Dates reflect when each version was
tagged. Entries before 2.2.0 are reconstructed from git history — we
didn't track user-facing changelog notes at the time, so they're a
curated summary rather than an exhaustive list.

Format loosely follows [Keep a Changelog](https://keepachangelog.com/).
This project uses [Semantic Versioning](https://semver.org/).

---

## [2.2.1] — 2026-04-20

Patch release. One bug fix, no feature changes.

### Fixed
- **Toast spam on failing verifications.** A single failed TinyFish
  check was emitting up to 8+ duplicate red toasts (and the same
  number of native macOS notifications) because the verification-
  completion listener was registering itself inside every component
  that consumed it — Dashboard, ActivityFeed, every session card,
  and so on. A single backend event fanned out across all mounts,
  and the new diagnosis-skeleton flow that re-emits on LLM
  completion doubled the count again. Notifications are now
  deduplicated by task id so each check produces exactly one toast
  and one native notification, regardless of how many sessions are
  on screen or whether the task ran through the diagnosis path.

---

## [2.2.0] — 2026-04-19

A serious polish pass on AI Chat, GitHub workflows, and the first-run
experience. The app is now much more honest about what's configured,
much more forgiving when things go wrong, and much harder to misuse.

### Highlights
- Install Claude Code right from the app — no terminal dance.
- AI Chat got **edit / rewind / delete** on past messages, GitHub-
  flavored markdown rendering, and a new **Focus mode** that tucks
  the chat beside the dashboard so you can reference checks while
  chatting.
- Create-PR and Merge-PR both got real draft editors with an
  **AI polish** button that rewrites your commit messages from the
  underlying commit log.
- A **secrets firewall** at the OS level blocks the AI chat from
  reading your `.env` files, SSH keys, or grepping for API keys —
  regardless of how the user prompts it.
- **Honest first-run guidance** — no more green checkmarks for things
  that aren't actually set up. The welcome panel, session cards, and
  Project Config all surface live state and point at the one thing
  you should do next.
- Brand new app icon — shield / eye / check.

### AI Chat
- Edit any past prompt in place and re-send; the conversation reflows
  from that point without you having to scroll back and paste.
- Rewind to any point in the conversation — drops everything after
  with one click (warns you first).
- Delete individual messages (yours, the assistant's, or tool calls).
- Full markdown rendering for assistant replies: code blocks with
  monospace styling, tables, lists, inline code, and real links that
  open in your default browser instead of the app webview.
- **Focus mode** — the chat becomes a side-panel; Activity, GitHub,
  History, and Projects tabs all filter to the project you're
  chatting about, so you can read a check result and ask about it in
  the same glance.
- Chat transcripts now persist — close the panel and reopen later,
  the conversation log is still there. One-click "clear transcript"
  when you want a clean slate.
- **Secrets firewall** silently blocks attempts to open `.env`,
  credential files, SSH keys, or grep for API-key patterns — you see
  a clear red notice in chat explaining what was blocked.
- The chat gets a friendlier "why notifications?" primer before
  macOS pops its permission dialog (no more context-less OS prompt
  on first launch).
- TCC-protected-directory error now opens a helpful popup with a
  copy-pasteable `mv` command instead of a vanishing toast.
- When the agent process unexpectedly dies mid-chat, you get a
  toast even if the chat panel was closed — no more silent loss.
- The agent is now instructed to tell you which button to click in
  the app to re-run a check, instead of blurting out internal HTTP
  endpoints.

### GitHub tab
- **Create PR** no longer fires blind. Click it and a draft dialog
  opens showing the title, commit-log-generated body, and a
  collapsible commits list — edit anything before it's sent.
- **AI Polish** button on both Create-PR and Merge-PR rewrites the
  commit title + body by reading your actual commits via Fireworks
  gpt-oss-120b.
- **Merge PR** dialog shows the GitHub-default squash commit
  pre-filled and editable, links to the live PR + branches, and
  streams live check progress as the merge validates.
- Projects with multiple git worktrees on different branches get a
  Create-PR row for *each* pending branch, not just the first one
  AgentDesk sees.
- **Pre-flight push check** catches branches that aren't on origin
  yet — the Create-PR button never opens a dialog that's guaranteed
  to fail.
- "N can create PR" chip in the GitHub tab header surfaces
  actionable branches at a glance.
- PR table columns now align cleanly across rows; CI / Review /
  Merge states are in the same column across every PR.
- "Refresh All" no longer lights up every project card as active.

### First-run experience
- Redesigned **Welcome panel** with live status checkmarks that
  reflect *reality* — if Claude Code isn't installed, the green
  tick doesn't show up.
- **Install Claude Code CLI** inside the app with one click — runs
  `npm i -g @anthropic-ai/claude-code` in a login shell, shows live
  output, and flips the welcome panel to green on success.
- **"Not configured" pill** on session cards where you haven't set
  any URLs, E2E tests, status pages, or alerts — routes straight to
  Project Config when clicked.
- **Per-tab ✓ in Project Config** shows at a glance which sections
  have data (URLs, E2E Tests, Alerts, Status).
- **Inline warnings** in Project Config when GitHub or Slack isn't
  connected globally — no more saving a Slack channel name that
  silently does nothing. Each warning has a button that jumps to
  Settings → Integrations.
- **API-key banner** explains what TinyFish is (the browser agent
  that runs your verifications) and what Fireworks does (diagnoses
  + fix suggestions), so users know *why* they might want their own
  keys vs. the shared default.
- **Notification primer** explains what the app will use
  notifications for *before* macOS asks for permission.
- **Session-cards explainer** shown once on first install so a fresh
  card isn't an unexplained thing on the dashboard.

### Verification History
- Search, filter by status / date range / type, and export the
  filtered set to JSON with one click.
- Every row now shows inline failure context, commit SHA, and a
  per-project pass-rate badge.
- Rows bucket by **Today / Yesterday / This week / Older**, plus a
  Current-vs-Past split per project so recent failures don't drown
  in old noise.
- Re-run any past check directly from its row — jumps to the
  Activity tab while the verification runs.
- **Pin** records to protect them from automatic cleanup, **Delete**
  single records, or **Clear** an entire project's history — each
  with a confirmation dialog that previews exactly what will be
  removed.
- AI diagnosis + Suggest-Fix output is now persisted on the record
  so it survives app restarts.
- Merges, PR creations, issue filings, and comment posts all show
  up in History now, not just verification runs.

### Toasts + notifications
- New **warning toast** for validation hints like "Title is required"
  (yellow and friendly) instead of the old red "error" that felt
  like something broke.
- **Firewall blocks + agent disconnects** fire toasts even when the
  chat panel is closed, so you know what's happening.
- A **failing verification** now toasts when the check finishes, not
  just when macOS decides to surface the native notification — useful
  when you're focused on a different tab in the app.
- "Opened existing X" shows as a neutral blue info toast everywhere
  (was inconsistent between green and blue before).

### Reliability
- Verifications automatically **retry once on transient failures**
  (network blips, 5xx responses, stream drops) — no more clicking
  Re-run for flaky deployments.
- Cards no longer **flicker** from "no diagnosis" to "diagnosis
  appears" a second later — a placeholder fills the gap while the
  AI diagnosis is generating.
- **Project card order stays stable** across app restarts — GitHub
  PR polling in the background no longer reshuffles the carousel.
- **A project card only flips to active** when you actually start
  chatting in AI Chat, not the moment you open the panel.
- The "Verify on push" feature was **renamed from Auto-Verify** to
  make it clear it nudges you with a toast rather than running
  checks automatically behind your back.
- **Degraded Claude Code integration** now tells you which part is
  broken in the header chip (Hooks Missing vs. Receiver Down), not
  the ambiguous "Degraded" it used to.

### Settings
- **Test any API key** before you need it — each provider section
  (TinyFish, Fireworks, Composio, OpenRouter) now has a **Test**
  button that pings the provider directly and shows a green tick +
  latency if the key is valid, or a red cross + the exact rejection
  reason if it isn't. No more waiting for a verification to fail to
  find out a key expired.
- The test badge tells you **which key it used** — "your key" if
  you've pasted one in the field, "shared key" if AgentDesk is
  falling back to the built-in default. Pastes a key? The badge
  clears so you don't confuse a stale green with a fresh one.
- **Silent-fallback warning** — if your TinyFish key is rejected
  mid-verification and AgentDesk falls back to the built-in shared
  key, a warning toast fires so you know to update the key instead
  of silently draining the shared quota.

### Design
- **New app icon** — shield + eye + checkmark in a teal/blue
  gradient, replacing the default Tauri boilerplate icon. Reads
  clearly at every size from 32px Finder sidebar to 512px
  Launchpad.

---

## [2.1.0] — 2026-04-02

The big feature-and-integration cut. Verification intelligence (LLM
diagnosis + fix suggestions), full GitHub workflow (tab, merge
button, PR create, diagnosis-to-PR-comment), Slack alerts via
Composio, the embedded AI Chat agent, and E2E / status / visual
verification modes. Under the hood, the app also got its "symbiosis"
hook architecture — Claude Code's PostToolUse / UserPromptSubmit
hooks now piggyback verification results back into the agent's
context mid-conversation.

### AI verification intelligence
- **Fireworks AI LLM cascade** powering failure diagnosis
  (`gpt-oss-120b`, ~1.4 s) and fix suggestions (`kimi-k2p5`), with
  OpenRouter as a secondary cascade when Fireworks is unavailable.
- **AI diagnosis** — every non-healthy check gets a one-sentence
  correlation between the failure and recent code changes, with
  RAG few-shot context from this project's past failures.
- **Suggest Fix** — concrete remediation generator using past
  failure patterns from verification history.
- **AI-generated E2E test definitions** — describe what to test in
  English, the LLM emits the structured test case.

### GitHub tab + PR workflows
- **Dedicated GitHub tab** alongside Activity and History, showing
  every open PR across every project with live CI status, review
  state, and merge readiness.
- **Inline Merge button** performs squash merge and polls the merge
  commit's required checks live; fires a deployment-live toast when
  the merge is up.
- **Create PR** from inside the app with fork detection,
  base-branch auto-pick (development → main), and structured
  commit-log body.
- **Diagnosis-to-PR-comment** — posts the AI-generated diagnosis
  to the failing PR (falls back to Create PR if no open PR exists).
- **File Issue on GitHub** with fork detection + existing-issue
  dedup, labels inferred from task type.
- Auto-refresh on `git push` via the hook receiver.

### Slack alerts
- **Per-project alert config** — each project picks its own Slack
  channel and its own event types (deploy / OAuth / PR CI / E2E /
  status / content). Global master toggle in Settings gates all
  dispatch.
- **Rich alert formatting** varies by task type: PR alerts include
  CI counts + review state; deployment alerts include the verified
  URL; E2E alerts include failing-step observations; visual alerts
  list affected page paths.
- Channel picker with live Slack-channel listing via OAuth.

### Composio integration
- GitHub + Slack OAuth flows handled via [Composio](https://composio.dev)'s
  auth-config system — no secrets stored client-side, connection IDs
  persisted per service.
- Powers every GitHub interaction (`GITHUB_LIST_PULL_REQUESTS`,
  `GITHUB_LIST_CHECK_RUNS_FOR_A_GIT_REFERENCE`,
  `GITHUB_LIST_REVIEWS_FOR_A_PULL_REQUEST`, issue creation, fork
  detection) and every Slack dispatch.

### Embedded AI Chat agent
- Every session card gets a built-in chat panel that spawns the
  Claude Code CLI (`claude-haiku-4-5`) inline, streaming NDJSON back
  through Tauri events for real-time tool-use + permission approval
  in the UI.
- Context pre-loaded from verification history, project config,
  E2E definitions, and latest results so the agent starts informed.
- Allow / Deny prompt UI for every Edit / Write / Bash tool call.

### New verification modes
- **E2E flow testing** — multi-step scripted browser flows via
  TinyFish, executed like a real user.
- **Status checks** — batch page rendering via TinyFish Fetch API
  for external dependency / status-page monitoring.
- **Visual / content regression** — baseline capture per page,
  diffed on each deploy via OpenRouter-powered analysis.
- **Cross-session verification history** persisted locally with FIFO
  eviction, queried for diagnosis RAG context.

### Dev loop + UX
- **Piggyback hook architecture** — Claude Code's PostToolUse /
  UserPromptSubmit hooks return `additionalContext` so verification
  results are injected directly into the agent's conversation
  mid-workflow, without blocking its work.
- **Tabbed dashboard** — GitHub / Activity / History replace the
  prior single-pane layout.
- **Auto-tunnel localhost** via `tinyfi.sh` so `http://localhost:3000`
  URLs can be verified without manual exposure.
- **Auto-detect real dev-server ports** via `lsof`.
- **Multi-agent debounce** (60 s per project × task type) so a burst
  of pushes doesn't fire ten verifications.
- **Smart result interpretation + project-scoped delivery** —
  results route only to the agent session that triggered them.

### In-house audit tooling
- **Lighthouse integration** — run local site audits, get actionable
  performance / accessibility output.
- **npm audit** integration — dependency vulnerability scanning.
- **Pa11y accessibility audit** — WCAG compliance checking.

### Settings + onboarding
- **Settings dialog** with masked API-key inputs and 0600 file
  permissions for stored secrets.
- **Built-in TinyFish + Fireworks API keys** (obfuscated in binary)
  so first-run users can try the app without signing up; banner
  prompts them to add their own when they're ready.
- **Integrations tab** with GitHub + Slack OAuth flow.
- Claude Code CLI prerequisite note on the empty-state onboarding.
- GitHub Actions workflow for automated macOS releases.

### Changed
- **Activity Feed** replaces the slide-out Web Agent panel; checks
  grouped per project, streaming fixed.
- **Deployment check** redesigned — extraction-based goal, nav-link
  dropdown, responsive grid.
- **OAuth goal** rewritten — provider-agnostic, numbered steps.
- **GitHub PR goal** rewritten — linear steps, no re-checking.
- External links now open in the real browser via the Tauri opener
  plugin instead of inside the webview.

### Removed
- **AeroSpace** workspace integration (added complexity for limited
  benefit; focus narrowed to verification).
- **MCP** integration explored + discarded — blocked the agent for
  3-4 minutes and prevented parallel work. Hooks + piggyback
  replaced it.

### Fixed
- Fallback to built-in key on user-key auth failure.
- Allow clearing personal API key to fall back to shared key.
- Compact card layout with inline grouped buttons restored.
- Shell PATH resolution for the desktop app.
- `picomatch` high-severity npm vulnerability.

---

## [2.0.0] — 2026-03-08

MVP milestone release.

### Added
- README with download instructions and setup guide.
- Richer PR rendering with review type + reviewer surfaced.

### Removed
- Windows Store icons + unused placeholder SVGs.

---

## [0.2.0] — 2026-03-05

Initial public development cut. Core architecture + MVP features.

### Added
- **Tauri v2 + React 19 + TypeScript** scaffolding.
- **Rust backend** — TinyFish engine, Claude Code session detection,
  deterministic port management, hook receiver HTTP server, Composio
  integration hooks.
- **Dashboard** with session cards, active / idle status, project
  carousel, archived-sessions drawer.
- **SessionCard** with per-project quick actions (Deploy / OAuth /
  GitHub PRs / Scan / Run).
- **WebAgentPanel** — specialized result renderers for GitHub PRs,
  deployment checks, and OAuth flows.
- **ProjectConfigDialog** — per-project URL + test configuration.
- **TinyFish integration** — real SSE streaming, live browser-preview
  iframe, concurrent parallel checks.
- **Auto-verify on completion** — Claude Code session ends → run the
  configured checks.
- **Claude Code hooks** — install / uninstall lifecycle, real-time
  event handling, settings.json merge.
- **Native macOS notifications** + sound on task completion.
- **Dynamic system tray** with active-session count.
- **WorkspaceSwitcher** with clickable workspace slots.
- **OAuthTester** with redirect-chain visualization + provider badges.
- Atmospheric NASA-mission-control UI polish (noise texture, accent
  glows, status dots).
- Error handling with classified error states + retry.
- Mock data layer for visual testing every surface.
- Test suite (134 tests across stores, hooks, and user flows).

### Fixed
- Session detection keyed on actual cwd (not launch directory).
- Tooltip clipping behind `overflow:hidden` parents.
- Task ID preservation through completion (regression guard).
- Live session updates in card UI.
- OAuth status validation + rawData unwrapping.
- WorkOS intermediate auth-page handling in OAuth goal.
