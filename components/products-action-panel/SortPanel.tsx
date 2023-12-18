"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { sortItems } from "@/constants/sortFilterItems";
import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const SortPanel = () => {
  const router = useRouter();
  const { gender, category } = useParams<{
    gender: string;
    category: string;
  }>();
  const [selectedSortValue, setSelectedSortValue] = useState<string | null>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setSelectedSortValue(searchParams?.get("sort" || ""));
  }, [setSelectedSortValue, searchParams]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (!selectedSortValue) return newParams.delete("sort");
    newParams.set("sort", selectedSortValue);

    const paramsString = newParams.toString();
    const queryString = `${paramsString.length ? `?${paramsString}` : ""}`;

    router.push(`/${gender}/${category || ""}/${queryString}`);
  }, [selectedSortValue, router, searchParams, gender, category]);

  const sortValueHandler = (sortValue: string) =>
    setSelectedSortValue(sortValue);

  return (
    <div className="w-52">
      <Select value={selectedSortValue || ""} onValueChange={sortValueHandler}>
        <SelectTrigger>
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sortItems.map((item, idx) => (
              <SelectItem key={idx} value={item.slug}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortPanel;
