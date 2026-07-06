import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional class names (clsx) and de-duplicates conflicting Tailwind
 * utilities (tailwind-merge), so e.g. `cn("p-2", condition && "p-4")` yields a
 * single, predictable `p-4`. Used throughout the UI.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
