import Link from "next/link";

const NavMenu = () => {
  return (
    <ul className="mt-8 flex flex-1 flex-col items-end gap-6 md:flex lg:mt-0 lg:flex-row">
      <li>
        <Link
          href="/men"
          className="text-xl underline-offset-4 hover:underline lg:text-base"
        >
          Men
        </Link>
      </li>
      <li>
        <Link
          href="/women"
          className="text-xl underline-offset-4 hover:underline lg:text-base"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-xl underline-offset-4 hover:underline lg:text-base"
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
