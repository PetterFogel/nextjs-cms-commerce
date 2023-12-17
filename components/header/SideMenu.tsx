import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavMenu from "./NavMenu";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClickHandler = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer" onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent side="left">
        <NavMenu onLinkClick={linkClickHandler} />
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
