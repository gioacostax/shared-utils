export const dateDiff = (startDate: Date, endDate: Date) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let mnonths = endDate.getMonth() - startDate.getMonth();

  if (mnonths < 0) {
    years--;
    mnonths += 12;
  }

  return years > 0 ? `${years} años y ${mnonths} meses` : `${mnonths} meses`;
};
