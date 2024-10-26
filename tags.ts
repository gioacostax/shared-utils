/**
 * Remove duplicates from an array
 * @param array
 * @returns
 */
export const removeDupsAndLowerCase = (array: string[]) => {
  if (!array.length) return array;
  return Array.from(new Set(array.map((str) => str.toLowerCase())));
};
