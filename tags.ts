/**
 * Lowercase tag and remove duplicates from an array
 * @param array
 * @returns
 */
export const normalize = (array: string[]) => {
  if (!array.length) return array;
  return Array.from(new Set(array.map((str) => str.toLowerCase())));
};
