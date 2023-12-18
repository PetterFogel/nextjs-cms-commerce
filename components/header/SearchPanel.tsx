import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { FormEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState<string | null>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setInputValue(searchParams?.get("q" || ""));
  }, [setInputValue, searchParams]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newParams = new URLSearchParams(searchParams.toString());
    if (!inputValue) return newParams.delete("q");
    newParams.set("q", inputValue);
    const paramsString = newParams.toString();
    const queryString = `${paramsString.length ? `?${paramsString}` : ""}`;

    setIsOpen(false);
    router.push(`/search/${queryString}`);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <SearchIcon
          className="h-5 cursor-pointer lg:h-6"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent side="top">
        <form onSubmit={onSubmit}>
          <Input
            value={inputValue || ""}
            placeholder="Search for product"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default SearchMenu;
