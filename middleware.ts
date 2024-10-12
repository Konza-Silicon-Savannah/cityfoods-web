import { NextRequest, NextResponse } from 'next/server';
import { getValidToken } from '@/app/lib/auth';

export async function middleware(req: NextRequest) {

  // Exempt the root path and localhost:3000
  if (
    req.nextUrl.pathname === '/' || 
    req.nextUrl.origin === 'http://localhost:3000' ||
    req.nextUrl.pathname === '/api/login'
  ) {
    return NextResponse.next();
  }

  const token = await getValidToken(req);

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