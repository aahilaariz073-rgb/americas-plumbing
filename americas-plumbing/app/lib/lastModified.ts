import { execSync } from 'child_process';

// Real, verifiable last-modified date for a source file, pulled from git
// history at build time. Google's own guidance (2024) is that it uses
// sitemap lastmod only when it's "consistently and verifiably accurate" —
// a single hardcoded date across every URL is exactly the kind of signal
// Google learns to distrust and ignore, so this reads the true per-file
// commit history instead. Falls back to the current build date if git
// history is unavailable (e.g. a shallow clone) so the build never breaks.
export function gitLastModified(relativePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format=%aI -- "${relativePath}"`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    // git unavailable or file has no history in this checkout — fall through
  }
  return new Date();
}
