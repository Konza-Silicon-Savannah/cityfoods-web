import { NextRequest, NextResponse } from 'next/server';
import { secureStorage } from '@/utils/secureStorage';

export async function middleware(req: NextRequest) {

  // Exempt the root path and domain name entry
  if (
    req.nextUrl.pathname === '/' || 
    req.nextUrl.origin === 'https://cityfoods.konza.go.ke/' ||
    req.nextUrl.pathname === '/signin'
  ) {
    return NextResponse.next();
  }

  const token = secureStorage.getTokens();

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - signin, signup (authentication pages)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|signin|signup|login).*)',
  ],
};