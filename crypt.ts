import forge from 'node-forge';

/**
 * Encrypt plain text
 * @param value plain text
 * @param secret secret
 * @returns encrypted string
 */
export const encrypt = (value: string, secret: string) => {
  const salt = forge.util.hexToBytes(secret.slice(0, 32));
  const iv = forge.util.hexToBytes(secret.slice(0, 32));
  const key = forge.pkcs5.pbkdf2(secret, salt, 10000, 32);

  const cipher = forge.cipher.createCipher('AES-CBC', key);
  cipher.start({ iv });
  cipher.update(forge.util.createBuffer(value));
  cipher.finish();

  const encrypted = cipher.output.getBytes();
  return forge.util.encode64(encrypted);
};

/**
 * Decrypt into plain text
 * @param value encrypted string
 * @param secret secret
 * @returns decrypted string
 */
export const decrypt = (value: string | null, secret: string) => {
  if (!value) return null;

  const salt = forge.util.hexToBytes(secret.slice(0, 32));
  const iv = forge.util.hexToBytes(secret.slice(0, 32));
  const encrypted = forge.util.decode64(value);

  const key = forge.pkcs5.pbkdf2(secret, salt, 10000, 32);

  const decipher = forge.cipher.createDecipher('AES-CBC', key);
  decipher.start({ iv });
  decipher.update(forge.util.createBuffer(encrypted));
  const result = decipher.finish();

  return result ? decipher.output.toString() : null;
};
