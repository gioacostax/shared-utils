import { getAbsoluteUrl, getRelativeUrl } from '../url';

describe('url utils', () => {
  test('getAbsoluteUrl', () => {
    /* Assertions */
    expect(getAbsoluteUrl('/test', '/path', 'http://localhost')).toBe('http://localhost/path/test');
  });

  test('getRelativeUrl', () => {
    /* Assertions */
    expect(getRelativeUrl('/test', '/path', 'http://localhost')).toBe('/path/test');
  });

  test('getAbsoluteUrl with default params', () => {
    import.meta.env.BASE_URL = '/path';
    (import.meta.env as Record<string, string>).SITE = 'http://localhost';

    /* Assertions */
    expect(getAbsoluteUrl('/test')).toBe('http://localhost/path/test');
  });

  test('getRelativeUrl with default params', () => {
    import.meta.env.BASE_URL = '/path';
    (import.meta.env as Record<string, string>).SITE = 'http://localhost';

    /* Assertions */
    expect(getRelativeUrl('/test')).toBe('/path/test');
  });
});
