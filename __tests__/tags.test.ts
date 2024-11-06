import { normalize } from '../tags';

describe('tags utils', () => {
  test('normalize', () => {
    /* Assertions */
    expect(normalize(['A', 'b', 'c', 'C'])).toEqual(['a', 'b', 'c']);
  });

  test('normalize empty array', () => {
    /* Assertions */
    expect(normalize([])).toEqual([]);
  });
});
