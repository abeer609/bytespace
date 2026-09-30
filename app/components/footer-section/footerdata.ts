export type FooterLink = { label: string; href: string };

export const footerColumns: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/categories/business" },
    { label: "IT", href: "/categories/it" },
    { label: "Design", href: "/categories/design" },
  ],
  [
    { label: "Development", href: "/categories/development" },
    { label: "Marketing", href: "/categories/marketing" },
    { label: "Photography", href: "/categories/photography" },
    { label: "Finance", href: "/categories/finance" },
    { label: "Sport", href: "/categories/sport" },
  ],
  [
    { label: "Become a Creator", href: "/creators/join" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
