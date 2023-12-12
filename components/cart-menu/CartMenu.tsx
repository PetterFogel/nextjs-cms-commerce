"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartMenuItem from "./CartMenuItem";

const CartMenu = () => {
  const {
    cartCount,
    totalPrice,
    cartDetails,
    handleCartClick,
    shouldDisplayCart,
    redirectToCheckout
  } = useShoppingCart();

  const handleCheckoutClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="w-full overflow-y-auto sm:w-[450px]">
        <SheetHeader className="text-start">
          <SheetTitle>Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 ">
            <ul className="-my-6 divide-y divide-gray-200">
              {Object.values(cartDetails || {}).map((item, idx) => (
                <CartMenuItem key={idx} cartItem={item} />
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-200 py-8">
            <div className="flex justify-between text-sm font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>{totalPrice} SEK</p>
            </div>
            <div className="mt-6">
              <Button className="w-full" onClick={handleCheckoutClick}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartMenu;
