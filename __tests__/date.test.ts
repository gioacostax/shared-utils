import { dateDiff } from '../date';

describe('date utils', () => {
  test('dateDiff', () => {
    /* Assertions */
    expect(dateDiff(new Date(2022, 1, 1), new Date(2022, 2, 1))).toBe('1 mes');
  });
});
