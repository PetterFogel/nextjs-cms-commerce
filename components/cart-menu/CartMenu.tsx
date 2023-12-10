"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { PlusIcon, MinusIcon } from "lucide-react";
import Image from "next/image";

const CartMenu = () => {
  const {
    cartCount,
    removeItem,
    totalPrice,
    handleCartClick,
    shouldDisplayCart,
    cartDetails,
    incrementItem,
    decrementItem
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="w-full overflow-y-auto sm:w-[450px]">
        <SheetHeader className="text-start">
          <SheetTitle>Cart ({cartCount})</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 ">
            <ul className="-my-6 divide-y divide-gray-200">
              {Object.values(cartDetails || {}).map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-16 flex-shrink-0">
                    <Image
                      src={item.image as string}
                      alt="Product image"
                      height={100}
                      width={100}
                      priority
                    />
                  </div>
                  <div className="ml-4 w-full space-y-3">
                    <div>
                      <div className="text-sm font-medium">
                        <h3>
                          {item.name} -{" "}
                          <span className="uppercase">{item.size}</span>
                        </h3>
                        <p>{item.price} SEK</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <MinusIcon
                          className="h-4"
                          onClick={() => decrementItem(item.id)}
                        />
                        <p>{item.quantity}</p>
                        <PlusIcon
                          className="h-4"
                          onClick={() => incrementItem(item.id)}
                        />
                      </div>
                      <div>
                        <Button
                          variant={"link"}
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
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
