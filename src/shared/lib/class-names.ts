type ClassNameValue = string | false | null | undefined;

/** Joins conditional class names, dropping every falsy entry. */
export function mergeClassNames(...values: ClassNameValue[]): string {
  return values.filter(Boolean).join(" ");
}
