import Link from "next/link";

const Header = () => {
  return (
    <header className="flex gap-4">
      <div>Logo</div>
      <nav className="flex gap-4">
        <Link href={"/men/shirts"}>Men</Link>
        <Link href={"/women/shirts"}>Women</Link>
      </nav>
    </header>
  );
};

export default Header;
