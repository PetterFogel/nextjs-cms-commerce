"use client";
import { ICategory } from "@/types/category";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Props {
  categories: ICategory[];
}

const Filter = ({ categories }: Props) => {
  const router = useRouter();
  const { gender, category } = useParams<{
    gender: string;
    category: string;
  }>();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category, gender]);

  const selectCategoryHandler = (itemUrl: string) => {
    setSelectedCategory(itemUrl);
    router.push(`/${gender}/${itemUrl}`);
  };

  return (
    <>
      <ul className="hidden items-center gap-3 md:flex">
        {categories.map((item, idx) => (
          <li key={idx}>
            <Link
              href={`/${gender}/${item.url}`}
              onClick={() => setSelectedCategory(item.url)}
              className={`underline-offset-4 hover:underline
              ${selectedCategory === item.url ? "underline" : ""}
              
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <Select value={selectedCategory} onValueChange={selectCategoryHandler}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((item, idx) => (
                <SelectItem key={idx} value={item.url}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Filter;
