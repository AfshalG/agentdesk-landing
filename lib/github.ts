/**
 * Build-time fetches against the GitHub REST API. Returns sensible
 * fallbacks on failure so offline builds don't break.
 *
 * We do not pass a token — public repo, anonymous is fine. Rate limit
 * is per-IP; build servers rarely hit it.
 *
 * RELEASES_REPO is the public-facing distribution repo. The source tree
 * for AgentDesk lives in a separate private repo; only compiled binaries
 * are published to this one. See .github/workflows/release.yml in the
 * private repo for the cross-repo publish workflow.
 */

const RELEASES_REPO = "AfshalG/agentdesk-releases";
const FALLBACK_VERSION = "2.2.1";
const FALLBACK_DMG = `AgentDesk_${FALLBACK_VERSION}_aarch64.dmg`;

export type ReleaseInfo = {
  version: string;
  dmgUrl: string;
  dmgName: string;
  publishedAt: string | null;
  releaseUrl: string;
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${RELEASES_REPO}/releases/latest`,
      {
        headers: { accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const json = (await res.json()) as {
      tag_name: string;
      published_at: string;
      html_url: string;
      assets: Array<{ name: string; browser_download_url: string }>;
    };
    const dmg = json.assets.find((a) => a.name.endsWith(".dmg"));
    if (!dmg) throw new Error("No .dmg asset");
    return {
      version: json.tag_name.replace(/^v/, ""),
      dmgUrl: dmg.browser_download_url,
      dmgName: dmg.name,
      publishedAt: json.published_at,
      releaseUrl: json.html_url,
    };
  } catch {
    return {
      version: FALLBACK_VERSION,
      dmgUrl: `https://github.com/${RELEASES_REPO}/releases/latest/download/${FALLBACK_DMG}`,
      dmgName: FALLBACK_DMG,
      publishedAt: null,
      releaseUrl: `https://github.com/${RELEASES_REPO}/releases/latest`,
    };
  }
}

export async function getStarCount(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${RELEASES_REPO}`, {
      headers: { accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { stargazers_count: number };
    return json.stargazers_count;
  } catch {
    return null;
  }
}

export const GITHUB_URL = `https://github.com/${RELEASES_REPO}`;
