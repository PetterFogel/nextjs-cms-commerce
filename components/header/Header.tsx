"use client";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import SearchPanel from "./SearchPanel";
import SideMenu from "./SideMenu";
import NavMenu from "./NavMenu";
import Link from "next/link";

const Header = () => {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="flex h-12 items-center justify-between gap-4 border-b px-4 lg:px-12">
      <nav className="hidden flex-1 lg:block">
        <NavMenu />
      </nav>
      <div className="block flex-1 lg:hidden">
        <SideMenu />
      </div>
      <div className="flex w-full max-w-[150px] flex-1 justify-center">
        <Link href={"/"}>
          <h3 className=" w-[200px] text-xl font-medium">THE MANY SAINTS</h3>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-2 lg:gap-4">
        <SearchPanel />
        <div className="relative">
          <ShoppingBag
            className="h-6 cursor-pointer"
            onClick={() => handleCartClick()}
          />
          {cartCount !== 0 && (
            <div
              onClick={() => handleCartClick()}
              className="absolute -right-2 -top-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-black"
            >
              <span className="text-xs text-white">{cartCount}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
