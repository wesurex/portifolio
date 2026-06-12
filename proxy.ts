import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["pt-BR", "es", "en"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /en/* redireciona para a URL canônica sem prefixo
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  // sem prefixo de idioma → serve o conteúdo EN mantendo a URL limpa
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // ignora assets internos e arquivos estáticos (qualquer caminho com extensão)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
