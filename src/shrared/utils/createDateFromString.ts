export default function createDateFromString(dateString: string): Date | null {
  const [day, month, year] = dateString.split('-').map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    console.error('Invalid date string format');
    return null;
  }

  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) {
    console.error('Invalid date');
    return null;
  }

  return date;
}
