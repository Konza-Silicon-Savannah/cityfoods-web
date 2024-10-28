import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Public paths that don't require authentication
  const publicPaths = ['/signin', '/signup', '/'];
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // Get the token from cookies
  const token = request.cookies.get('auth_tokens')?.value;

  // Redirect to signin if accessing protected route without token
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/signin', request.url));
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
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};