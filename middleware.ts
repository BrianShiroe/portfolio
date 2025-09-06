import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "er"];
const defaultLocale = "en";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/_next/image")
  ) {
    return NextResponse.next();
  }

  const pathnameParts = pathname.split("/");
  const localeFromPath = pathnameParts[1];

  if (!locales.includes(localeFromPath)) {
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|images).*)",
  ],
};
