import Link from "next/link";
import FooterBottomBar from "./FooterBottomBar";
import NewsletterForm from "./NewsletterForm";
import { footerColumns, legalLinks } from "./footerdata";

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-12 pt-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="ByteSpace home"
              className="inline-flex items-end gap-2"
            >
              <img src="/images/logo_inverted.png" className="max-w-42.5" />
            </Link>
            <p className="mt-6 text-lg text-slate-800">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-700">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:pt-12"
          >
            {footerColumns.map((column, i) => (
              <ul key={i} className="space-y-6">
                {column.map((link) => (
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
            ))}
          </nav>
        </div>
        <FooterBottomBar links={legalLinks} />
      </div>
    </footer>
  );
}
