"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

const CartMenu = () => {
  const {
    cartCount,
    removeItem,
    totalPrice,
    handleCartClick,
    shouldDisplayCart,
    cartDetails
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {Object.values(cartDetails || {}).map((item) => (
                <li key={item.id} className="flex py-6">
                  <Image
                    src={item.image as string}
                    alt="Product image"
                    width={70}
                    height={100}
                  />
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="text-sm font-medium">
                        <h3>{item.name}</h3>
                        <p>{item.price} SEK</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-600">QTY: {item.quantity}</p>
                      <p className="font-medium uppercase">{item.size}</p>
                      <div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="font-medium underline-offset-4 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-200 py-8">
            <div className="flex justify-between text-sm font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>{totalPrice} SEK</p>
            </div>
            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartMenu;
