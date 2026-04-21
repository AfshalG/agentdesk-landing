import type { ReleaseInfo } from "@/lib/github";

type Props = {
  release: ReleaseInfo;
  variant?: "primary" | "ghost";
  label?: string;
  size?: "default" | "lg";
};

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.9 3.2-.5 8 1.3 10.6.9 1.3 1.9 2.7 3.3 2.7 1.3-.1 1.8-.9 3.4-.9s2.1.9 3.5.8c1.4 0 2.3-1.3 3.2-2.6.5-.7 1.1-1.5 1.5-2.5-1.4-.5-3-3.1-3-4.9Zm-2.7-9.6C14.4 2.3 14.9 1.1 14.8 0c-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1.1 3 1.1 0 2.2-.6 2.9-1.4Z" />
    </svg>
  );
}

export default function DownloadButton({
  release,
  variant = "primary",
  label = "Download for Mac",
  size = "default",
}: Props) {
  const classes =
    variant === "primary"
      ? "btn-primary"
      : "btn-ghost";
  const sizeClasses = size === "lg" ? "!py-4 !px-6 !text-[14px]" : "";
  return (
    <a
      href={release.dmgUrl}
      className={`${classes} ${sizeClasses}`}
      aria-label={`Download ${release.dmgName} for Apple Silicon Mac`}
    >
      <AppleIcon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}
