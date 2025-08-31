// slugify.ts
export interface SlugifyOptions {
  /** Convert output to lowercase (default: true) */
  lower?: boolean;
  /** Separator between words (default: "-") */
  separator?: string;
  /** Remove any characters outside the allowed sets (default: true) */
  strict?: boolean;
  /** Keep non-ASCII letters/numbers (default: false => ASCII-only) */
  keepUnicode?: boolean;
  /** Trim leading/trailing separators (default: true) */
  trim?: boolean;
  /** Insert spaces between camelCase boundaries before slugging (default: true) */
  decamelize?: boolean;
  /** Max length of the slug (0 or undefined = unlimited) */
  maxLength?: number;
  /** Locale for case folding (default: undefined) */
  locale?: string;
  /** Apply custom replacements before slugging (order matters) */
  customReplacements?: Array<[string | RegExp, string]>;
}

/**
 * Create a URL-friendly slug from a string.
 */
export function slugify(input: unknown, opts: SlugifyOptions = {}): string {
  const {
    lower = true,
    separator = "-",
    strict = true,
    keepUnicode = false,
    trim = true,
    decamelize = true,
    maxLength,
    locale,
    customReplacements = [],
  } = opts;

  if (input == null) return "";
  let str = String(input);

  // 1) Expand camelCase boundaries so "helloWorld" -> "hello World"
  if (decamelize) {
    str = str
      .replace(/([a-z\d])([A-Z])/g, "$1 $2")
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1 $2");
  }

  // 2) Normalize & strip diacritics (NFKD splits accents)
  str = str.normalize("NFKD");
  if (!keepUnicode) {
    // Remove combining marks to get plain ASCII where possible
    str = str.replace(/[\u0300-\u036f]/g, "");
  }

  // 3) Common semantic symbol replacements (pre-slug)
  const common: Array<[RegExp, string]> = [
    [/\u00A9|\u00AE|™/gi, ""], // © ® ™ -> remove
    [/&/g, " and "],
    [/@/g, " at "],
    [/\+/g, " plus "],
    [/%/g, " percent "],
    [/€/g, " euro "],
    [/£/g, " pound "],
    [/¥/g, " yen "],
    [/₹/g, " rupee "],
  ];
  for (const [rx, rep] of common) str = str.replace(rx, rep);

  // 4) User custom replacements
  for (const [pattern, rep] of customReplacements) {
    str =
      typeof pattern === "string"
        ? str.split(pattern).join(rep)
        : str.replace(pattern, rep);
  }

  // 5) Case fold
  if (lower) {
    str = locale ? str.toLocaleLowerCase(locale) : str.toLowerCase();
  }

  // 6) Replace disallowed characters with the separator
  //    If keepUnicode=true allow any Unicode letters/numbers; else ASCII only.
  const allowedGroup = keepUnicode ? "\\p{L}\\p{N}" : "a-z0-9";
  const nonAllowed = new RegExp(`[^${allowedGroup}]+`, "gui");
  str = str.replace(nonAllowed, separator);

  // 7) Collapse duplicate separators
  const sepEsc = escapeForRegex(separator);
  const dupSep = new RegExp(`${sepEsc}{2,}`, "g");
  str = str.replace(dupSep, separator);

  // 8) Strict mode removes any leftover chars not matched above (paranoia)
  if (strict) {
    const strictRx = new RegExp(`[^${allowedGroup}${sepEsc}]`, "gui");
    str = str.replace(strictRx, "");
  }

  // 9) Trim separators
  if (trim) {
    const trimRx = new RegExp(`^${sepEsc}|${sepEsc}$`, "g");
    str = str.replace(trimRx, "");
  }

  // 10) Enforce max length (without leaving a trailing separator)
  if (maxLength && maxLength > 0 && str.length > maxLength) {
    str = str.slice(0, maxLength);
    if (trim) {
      const trimRx = new RegExp(`${sepEsc}$`);
      str = str.replace(trimRx, "");
    }
  }

  return str;
}

function escapeForRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
