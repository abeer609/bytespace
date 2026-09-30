import type { FooterLink } from "./footerdata";
import FooterLinkColumn from "./FooterLinkColumn";

export default function FooterLinks({ columns }: { columns: FooterLink[][] }) {
  return (
    <nav
      aria-label="Footer"
      className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:pt-12"
    >
      {columns.map((column, i) => (
        <FooterLinkColumn key={i} links={column} />
      ))}
    </nav>
  );
}
