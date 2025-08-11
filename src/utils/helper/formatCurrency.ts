/**
 * Formats a number with commas as thousands separators.
 * @param value - The number to format.
 * @param locale - Optional locale code (e.g., 'en-US', 'de-DE'). Defaults to 'en-US'.
 * @param fractionDigits - Optional fixed number of decimal places.
 * @returns The formatted number as a string.
 */
export function formatCurrency(
  value: number | string,
  locale: string = 'en-US',
  fractionDigits?: number
): string {
  if (value === null || value === undefined || isNaN(Number(value))) return '';

  const options: Intl.NumberFormatOptions = {};
  if (typeof fractionDigits === 'number') {
    options.minimumFractionDigits = fractionDigits;
    options.maximumFractionDigits = fractionDigits;
  }

  return Number(value).toLocaleString(locale, options);
}
