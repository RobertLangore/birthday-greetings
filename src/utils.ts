export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export const areSameDates = (date1: Date, date2: Date): boolean => {
  return date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};
