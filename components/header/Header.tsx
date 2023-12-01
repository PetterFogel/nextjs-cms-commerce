import { NavMenu } from "./NavMenu";
import { ShoppingBag, SearchIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-10 items-center justify-between gap-4 border-b px-4 lg:px-12">
      <nav className="hidden flex-1 lg:block">
        <NavMenu />
      </nav>
      <div className="block flex-1 lg:hidden">
        <MenuIcon />
      </div>
      <div className="flex w-full max-w-[150px] flex-1 justify-center">
        <Link href={"/"}>
          <h3 className="w-[150px] font-medium">THE MANY SAINTS</h3>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <SearchIcon className="h-5" />
        <ShoppingBag className="h-5" />
      </div>
    </header>
  );
};

export default Header;
