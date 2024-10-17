import { decrypt, encrypt } from '../crypt';

describe('utils: crypto', () => {
  test('encrypt()', () => {
    /* Assertions */
    expect(encrypt('value', '370efa2c012541bea87b74b8c6913f6b')).toBe('NLeQHcLYU//yUDkaMMataA==');
  });

  test('decrypt()', () => {
    /* Assertions */
    expect(decrypt('NLeQHcLYU//yUDkaMMataA==', '370efa2c012541bea87b74b8c6913f6b')).toBe('value');
  });

  test('decrypt() fails', () => {
    /* Assertions */
    expect(decrypt('NLeQHcLYU//yUDkaMataA==', '370efa2c012541bea87b74b8c6913f6b')).toBeNull();
  });

  test('decrypt() fails variant', () => {
    /* Assertions */
    expect(decrypt('', '370efa2c012541bea87b74b8c6913f6b')).toBeNull();
  });
});
