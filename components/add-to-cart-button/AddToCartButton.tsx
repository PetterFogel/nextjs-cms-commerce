"use client";
import { urlFor } from "@/lib/sanity";
import { Button } from "../ui/button";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ISpecificProduct } from "@/types/product";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Props {
  product: ISpecificProduct;
}

const AddToCartButton = ({ product }: Props) => {
  const { addItem, handleCartClick } = useShoppingCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const addProductHandler = () => {
    const productWithCurrency = {
      ...product,
      id: product.id + selectedSize,
      currency: "SEK",
      size: selectedSize,
      image: urlFor(product.images[0]).url(),
      product_data: {
        size: selectedSize
      }
    };
    addItem(productWithCurrency);
    handleCartClick();
  };

  return (
    <>
      <div className="flex ">
        <ToggleGroup type="single" variant="outline" value={selectedSize}>
          {product.sizes.map((size, idx) => (
            <ToggleGroupItem
              key={idx}
              value={size}
              aria-label="Toggle bold"
              className="uppercase"
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <Button onClick={addProductHandler}>ADD TO CART</Button>
    </>
  );
};

export default AddToCartButton;
