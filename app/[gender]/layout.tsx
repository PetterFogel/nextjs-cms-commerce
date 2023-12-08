import ProductsActionPanel from "@/components/products-action-panel.tsx/ProductsActionPanel";
import { ReactNode } from "react";

const GenderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <ProductsActionPanel />
      {children}
    </section>
  );
};

export default GenderLayout;
