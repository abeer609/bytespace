import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];
  return (
    <nav className="px-8 h-30 flex justify-between items-center text-shuttle-gray-50">
      <div className="">
        <img src="logo.png" className="w-[171px] h-[37px]" alt="" />
      </div>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex gap-4">
        <li>
          <Link href="/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/signup">Join Us</Link>
        </li>
        <li>
          <Link href="/cart">
            <ShoppingBag />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
