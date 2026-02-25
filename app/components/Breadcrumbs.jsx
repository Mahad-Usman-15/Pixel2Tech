"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const pageNames = {
  "/": "Home",
  "/about": "About Us",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/blogs": "Blog",
  "/contact": "Contact",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbs = paths.map((path, index) => {
    const href = "/" + paths.slice(0, index + 1).join("/");
    const name = pageNames[href] || path.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const isLast = index === paths.length - 1;

    return { href, name, isLast };
  });

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
      <Link
        href="/"
        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Go to homepage"
      >
        Home
      </Link>

      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />

          {crumb.isLast ? (
            <span className="text-slate-900 dark:text-slate-100 font-medium" aria-current="page">
              {crumb.name}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {crumb.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
