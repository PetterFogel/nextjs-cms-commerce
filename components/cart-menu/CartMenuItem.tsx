import { Button } from "../ui/button";
import { CartEntry } from "use-shopping-cart/core";
import { useShoppingCart } from "use-shopping-cart";
import { PlusIcon, MinusIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  cartItem: CartEntry;
}

const CartMenuItem = ({ cartItem }: Props) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();

  return (
    <li className="flex py-6">
      <div className="h-24 w-16 flex-shrink-0">
        <Image
          src={cartItem.image as string}
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
              {cartItem.name} -{" "}
              <span className="uppercase">{cartItem.size}</span>
            </h3>
            <p>{cartItem.price} SEK</p>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-2">
            <MinusIcon
              className="h-4 cursor-pointer"
              onClick={() => decrementItem(cartItem.id)}
            />
            <p>{cartItem.quantity}</p>
            <PlusIcon
              className="h-4 cursor-pointer"
              onClick={() => incrementItem(cartItem.id)}
            />
          </div>
          <div>
            <Button variant={"link"} onClick={() => removeItem(cartItem.id)}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartMenuItem;
