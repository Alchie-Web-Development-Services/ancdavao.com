/**
 * Gets the number of days remaining until the end of the current year.
 * @returns Number of remaining days.
 */
export function getRemainingDaysInYear(): number {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31); // Dec 31
  const oneDay = 1000 * 60 * 60 * 24;

  // Math.ceil ensures partial days count as full days left
  return Math.ceil((endOfYear.getTime() - today.getTime()) / oneDay);
}