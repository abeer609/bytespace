import Link from "next/link";
import type { FooterLink } from "./footerdata";

export default function FooterBottomBar({ links }: { links: FooterLink[] }) {
  return (
    <div className="mt-24 border-t border-slate-300 pt-10 md:mt-40">
      <div className="flex flex-col gap-4 text-base text-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
        <ul className="flex flex-wrap gap-x-9 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-blue-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
