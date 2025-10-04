/**
 * Format absolute url
 * @param path pathname
 * @param base base path
 * @param site base site
 * @returns absolute url
 */
export const getAbsoluteUrl = (path: string, base = '/', site = 'http://localhost') =>
  new URL(path.replace(/^\/+/, ''), `${site}${base}`).href;

/**
 * Format relative url
 * @param path pathname
 * @param base base path
 * @param site base site
 * @returns relative url
 */
export const getRelativeUrl = (path: string, base = '/', site = 'http://localhost') =>
  new URL(path.replace(/^\/+/, ''), `${site}${base}`).pathname;

export const getSearchParam = (url: string, key: string) =>
  new URLSearchParams(new URL(url).search).get(key) ?? undefined;

export const getRootDomain = (url: string) => new URL(url).hostname.split('.').slice(-2).join('.');
