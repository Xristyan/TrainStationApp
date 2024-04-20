import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nConfig } from "./i18nConfig";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   const headers = Object.fromEntries(request.headers.entries());
  const search = request.nextUrl.searchParams.toString();
  console.log(request);

  const path = request.nextUrl.pathname + (search ? `?${search}` : "");
  console.log("PATHHHHHHH", path);
  const pathMissingLocale = i18nConfig.locales.every(
    (locale) => !path.startsWith(`/${locale}`)
  );
  console.log("pathMissingLocale", pathMissingLocale);
  let locale: string;
  let response: NextResponse;

  if (pathMissingLocale) {
    const storedLocale = request.cookies.get("locale")?.value;
    // const preferredLocale = new Negotiator({ headers }).language(
    //   i18nConfig.locales
    // );

    locale = [storedLocale, i18nConfig.defaultLocale]
      .filter(Boolean)
      .filter((l) => i18nConfig.locales.includes(l as string))[0] as string;

    response = NextResponse.redirect(new URL(`/${locale}${path}`, request.url));
    console.log("responseINIF", response);
  } else {
    locale = path.split("/")[1];

    const containsMultipleLocaleOccurrences = new RegExp(
      `(/${locale}){2,2}`,
      "g"
    ).exec(path);
    console.log("Testttttttttttttttttttttttttttttttttttttt");
    if (containsMultipleLocaleOccurrences) {
      response = NextResponse.redirect(
        new URL(
          path.replace(new RegExp(`(/${locale}){2,2}`, "g"), `/${locale}/`),
          request.url
        )
      );
    } else {
      // console.log("Testttttttttttttttttttttttttttttttttttttt");
      response = NextResponse.next();
    }
  }

  response.cookies.set("locale", locale, {
    maxAge: 60 * 60 * 24 * 7 * 4 * 12 * 100,
  }); // 100 years expiry

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next|favicon|manifest|locales|storybook|images|sb-assets|sitemap|robots.txt|sw.js|workbox|icons).*)",
};
