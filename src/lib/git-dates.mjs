import { execSync } from 'node:child_process';

let _cache = null;

/**
 * Newest git commit date per repo path (ISO 8601 with offset), from a single
 * history walk. Memoized — Astro re-runs page frontmatter per route, and one
 * `git log --name-only` over this repo's history is cheap once but not 900×.
 *
 * Shallow-clone safe: the oldest visible commit in a shallow clone has no
 * parent, so git diffs it against the empty tree and it appears to have
 * created every file then present — using it would stamp long-untouched files
 * with that commit's date. Those fake-root commits are skipped when the repo
 * is shallow, so a path whose real last change predates the boundary is simply
 * absent from the map. Callers must treat absence as "unknown" and omit the
 * signal — an omitted lastmod/dateModified is harmless, a wrong one poisons
 * the credibility of every date on the site.
 *
 * If git is unavailable at build time entirely, returns an empty map and every
 * caller falls back the same way.
 */
export function gitLastModifiedMap() {
  if (_cache) return _cache;
  try {
    const shallow =
      execSync('git rev-parse --is-shallow-repository', { encoding: 'utf8' }).trim() === 'true';
    const roots = new Set(
      execSync('git rev-list --max-parents=0 HEAD', { encoding: 'utf8' }).trim().split('\n'),
    );
    const out = execSync('git log --format=%x01%H%x20%cI --name-only', {
      encoding: 'utf8',
      maxBuffer: 256 * 1024 * 1024,
    });
    const map = new Map();
    let current = null;
    let skipping = false;
    for (const line of out.split('\n')) {
      if (line.charCodeAt(0) === 1) {
        const [hash, date] = line.slice(1).split(' ');
        skipping = shallow && roots.has(hash);
        current = date;
      } else if (line && current && !skipping && !map.has(line)) {
        map.set(line, current);
      }
    }
    _cache = map;
  } catch {
    _cache = new Map();
  }
  return _cache;
}

/** Later of two ISO dates; handles either being undefined. Offsets differ
 * between commits (machines/CI), so compare as Dates, not strings. */
export function laterDate(a, b) {
  if (!a) return b;
  if (!b) return a;
  return new Date(a) > new Date(b) ? a : b;
}
