export const getAbsoluteUrl = (path: string) =>
  new URL(`${import.meta.env.BASE_URL}${path}`.replace(/(?<!:)\/+/gm, '/'), import.meta.env.SITE)
    .href;

export const getRelativeUrl = (path: string) =>
  new URL(`${import.meta.env.BASE_URL}${path}`.replace(/(?<!:)\/+/gm, '/'), import.meta.env.SITE)
    .pathname;
