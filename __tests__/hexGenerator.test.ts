import hexGenerator from '../hexGenerator';

describe('utils: hexGenerator', () => {
  test('execute', () => {
    /* Assertions */
    expect(hexGenerator()).toBeDefined();
  });
});
