import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NavMenu from "./NavMenu";

const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <NavMenu />
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
