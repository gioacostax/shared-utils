import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a unique ID
 *
 * @param size Length of the ID
 * @returns ID string
 */
export default (size = 4) => uuidv4().slice(-size);
