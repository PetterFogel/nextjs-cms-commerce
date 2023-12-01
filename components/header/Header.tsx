import { ShoppingBag, SearchIcon } from "lucide-react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex h-10 items-center justify-between gap-4 border-b px-12">
      <nav className="flex flex-1 gap-4">
        <NavMenu />
      </nav>
      <div className="flex flex-1 justify-center">
        <Link href={"/"}>
          <h3 className="font-medium">THE MANY SAINTS</h3>
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
