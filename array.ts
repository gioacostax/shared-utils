export const modifyObjectById = <T extends { id: string }>(
  array: T[],
  id: string,
  modifier: (item: T) => Partial<T>,
): T[] =>
  array.map((item) => {
    if (item.id === id) {
      return { ...item, ...modifier(item) };
    }
    return item;
  });

export const removeObjectById = <T extends { id: string }>(array: T[], id: string): T[] =>
  array.filter((item) => item.id !== id);
