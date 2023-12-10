"use client";
import { useParams } from "next/navigation";
import { ICategory } from "@/types/category";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  categories: ICategory[];
}

const Filter = ({ categories }: Props) => {
  const { gender, category } = useParams<{
    gender: string;
    category: string;
  }>();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category, gender]);

  return (
    <>
      <ul className="flex items-center gap-3">
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
    </>
  );
};

export default Filter;
