import { ReactNode } from "react";
import ProductsActionPanel from "@/components/products-action-panel/ProductsActionPanel";

const GenderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <ProductsActionPanel />
      {children}
    </section>
  );
};

export default GenderLayout;
