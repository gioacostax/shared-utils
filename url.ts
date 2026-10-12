/**
 * Format absolute url
 * @param path pathname
 * @param base base path
 * @param site base site
 * @returns absolute url
 */
export const getAbsoluteUrl = (
	path: string,
	base = "/",
	site = "http://localhost",
) => new URL(path.replace(/^\/+/, ""), `${site}${base}`).href;

/**
 * Format relative url
 * @param path pathname
 * @param base base path
 * @param site base site
 * @returns relative url
 */
export const getRelativeUrl = (
	path: string,
	base = "/",
	site = "http://localhost",
) => new URL(path.replace(/^\/+/, ""), `${site}${base}`).pathname;

export const getSearchParam = (url: string, key: string) =>
	new URLSearchParams(new URL(url).search).get(key) ?? undefined;

/**
 * Extracts the root domain (eTLD+1) from a URL using a **naive two-label heuristic**.
 *
 * @param url - Absolute URL (e.g. "https://api.giio.dev/path")
 * @returns The last two dot-separated labels of the hostname (e.g. "giio.dev")
 *
 * @remarks
 * This implementation assumes all effective TLDs are single-label (`.com`, `.dev`, `.io`, etc.).
 * It **fails for multi-label public suffixes** such as:
 *   - Country-code second-level: `.co.uk`, `.com.br`, `.gov.au` → returns `co.uk` instead of the registrable domain
 *   - Platform suffixes: `.github.io`, `.vercel.app`, `.pages.dev` → returns the platform suffix
 *   - Internationalized TLDs with two labels
 *
 * For production use with arbitrary origins, replace with a Public Suffix List based solution
 * (e.g. `tldts`, `psl`) which maintains the official Mozilla PSL and correctly handles all cases.
 *
 * Current usage in this codebase is safe because `allowOrigin` is a known, fixed domain (`giio.dev`)
 * and the comparison is symmetric (both sides use the same heuristic).
 */
export const getRootDomain = (url: string) =>
	new URL(url).hostname.split(".").slice(-2).join(".");
