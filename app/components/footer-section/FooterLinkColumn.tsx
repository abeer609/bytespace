import Link from "next/link";
import type { FooterLink } from "./footerdata";

export default function FooterLinkColumn({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-6">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-lg text-slate-800 transition-colors hover:text-blue-700"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
