import { type ClassValue, clsx } from "clsx";
import { sortItems } from "@/constants/sortFilterItems";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findSortItemHandler = (sort: string) =>
  sortItems.find((item) => item.slug === sort) || sortItems[0];
