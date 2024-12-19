export const shortenString = (str: string, maxLength = 32) => {
  if (str.length <= maxLength) return str;

  const partLength = Math.floor((maxLength - 3) / 2); // Divide espacio entre inicio y final
  const start = str.slice(0, partLength);
  const end = str.slice(-partLength);

  return `${start}...${end}`;
};
