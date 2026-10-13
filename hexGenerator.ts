import forge from 'node-forge';

/**
 * Generate a unique ID
 *
 * @param size Length of the ID
 * @returns ID string
 */
export default (size = 4) => forge.util.bytesToHex(forge.random.getBytesSync(size));
