import fs from "node:fs/promises";
import path from "node:path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const CHANGELOG_PATH = path.join(process.cwd(), "CHANGELOG.md");

export type ReleaseEntry = {
  version: string;
  date: string;
  bodyMarkdown: string;
  bodyHtml: string;
};

let cached: { full: string; entries: ReleaseEntry[] } | null = null;

async function loadRaw(): Promise<{ full: string; entries: ReleaseEntry[] }> {
  if (cached) return cached;
  const raw = await fs.readFile(CHANGELOG_PATH, "utf-8");

  // Split on `## [x.y.z] — YYYY-MM-DD` headers. Captures version and date.
  // Supports both em-dash and hyphen between version and date.
  const headerRx = /^## \[(\d+\.\d+\.\d+)\]\s*[—\-–]\s*(\d{4}-\d{2}-\d{2})\s*$/gm;
  const matches = [...raw.matchAll(headerRx)];

  const entries: ReleaseEntry[] = [];
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const version = m[1];
    const date = m[2];
    const startBody = m.index! + m[0].length;
    const endBody = i + 1 < matches.length ? matches[i + 1].index! : raw.length;
    const bodyMarkdown = raw.slice(startBody, endBody).trim();
    const bodyHtml = await mdToHtml(bodyMarkdown);
    entries.push({ version, date, bodyMarkdown, bodyHtml });
  }

  cached = { full: raw, entries };
  return cached;
}

async function mdToHtml(md: string): Promise<string> {
  const file = await remark().use(remarkGfm).use(remarkHtml).process(md);
  return String(file);
}

export async function getTopReleases(n: number): Promise<ReleaseEntry[]> {
  const { entries } = await loadRaw();
  return entries.slice(0, n);
}

export async function getAllReleases(): Promise<ReleaseEntry[]> {
  const { entries } = await loadRaw();
  return entries;
}

export async function getFullChangelogHtml(): Promise<string> {
  const { full } = await loadRaw();
  return mdToHtml(full);
}

export async function getCurrentVersion(): Promise<string> {
  const { entries } = await loadRaw();
  return entries[0]?.version ?? "2.2.1";
}

export function formatDate(iso: string): string {
  // "2026-04-20" -> "Apr 20, 2026"
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
