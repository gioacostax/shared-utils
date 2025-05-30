/**
 * Format absolute url
 * @param path pathname
 * @param base base path
 * @param site base site
 * @returns absolute url
 */
export const getAbsoluteUrl = (
  path: string,
  base = import.meta.env.BASE_URL,
  site = import.meta.env.SITE,
) => new URL(path.replace(/^\/+/, ''), `${site}${base}/`).href;

/**
 * Format relative url
 * @param path pathname
 * @param base base path
 * @param site base site
 * @returns relative url
 */
export const getRelativeUrl = (
  path: string,
  base = import.meta.env.BASE_URL,
  site = import.meta.env.SITE,
) => new URL(path.replace(/^\/+/, ''), `${site}${base}/`).pathname;

export const getSearchParam = (url: string, key: string) =>
  new URLSearchParams(new URL(url).search).get(key) ?? undefined;
