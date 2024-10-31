export const dateDiff = (startDate: Date, endDate: Date) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return years > 0 ? `${years} años y ${months} meses` : `${months} meses`;
};
