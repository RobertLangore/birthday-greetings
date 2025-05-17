export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export const areSameDates = (date1: Date | null, date2: Date | null): boolean => {
  if (!(date1 && date2)) {
    return false;
  }

  return date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

export const isDateValid = (date: Date): boolean => {
  return !isNaN(date.getTime());
};

export const dateFromString = (dateStr: string): Date | null => {
  let date = new Date(dateStr);

  if (!isDateValid(date)) {
    return null;
  }

  return date;
};
