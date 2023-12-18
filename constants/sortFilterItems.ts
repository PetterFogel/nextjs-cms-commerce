import { ISortItem } from "@/types/sortItem";

export const sortItems: ISortItem[] = [
  {
    label: "Latest arrivals",
    slug: "latestProducts",
    sortKey: "_createdAt",
    sortValue: "desc"
  },
  {
    label: "Price: Low to high",
    slug: "lowestPrice",
    sortKey: "price",
    sortValue: "asc"
  },
  {
    label: "Price: High to low",
    slug: "highestPrice",
    sortKey: "price",
    sortValue: "desc"
  }
];
