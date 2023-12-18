import { ReactNode } from "react";
import SortPanel from "@/components/products-action-panel/SortPanel";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col">
      <div className="self-auto p-4 md:self-end">
        <SortPanel />
      </div>
      {children}
    </section>
  );
};

export default SearchLayout;
